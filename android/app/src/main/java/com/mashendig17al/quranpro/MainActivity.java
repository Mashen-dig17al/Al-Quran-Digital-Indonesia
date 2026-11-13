package com.mashendig17al.quranpro;

import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.content.pm.PackageManager;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import android.view.WindowManager;
import android.webkit.CookieManager;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;
import android.window.OnBackInvokedCallback;
import android.window.OnBackInvokedDispatcher;

public class MainActivity extends Activity {

    private WebView webView;
    private static final int PERMISSION_REQ_POST_NOTIF = 101;

    public class WebAppInterface {
        @JavascriptInterface
        public void setFullscreen(final boolean enable) {
            // Deprecated: Layar Penuh digantikan dengan Biarkan Layar Tetap Menyala
            // Memastikan status bar dan navigation bar selalu tampak normal
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    applyFullscreen(false);
                }
            });
        }

        @JavascriptInterface
        public void setKeepScreenOn(final boolean enable) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    applyKeepScreenOn(enable);
                }
            });
        }

        @JavascriptInterface
        public void copyToClipboard(final String text) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        ClipboardManager clipboard = (ClipboardManager) getSystemService(Context.CLIPBOARD_SERVICE);
                        ClipData clip = ClipData.newPlainText("Ayat Al-Qur'an", text);
                        if (clipboard != null) {
                            clipboard.setPrimaryClip(clip);
                        }
                    } catch (Throwable t) {
                        t.printStackTrace();
                    }
                }
            });
        }

        @JavascriptInterface
        public void shareText(final String title, final String text) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Intent sendIntent = new Intent();
                        sendIntent.setAction(Intent.ACTION_SEND);
                        sendIntent.putExtra(Intent.EXTRA_TEXT, text);
                        sendIntent.putExtra(Intent.EXTRA_SUBJECT, title);
                        sendIntent.setType("text/plain");
                        Intent shareIntent = Intent.createChooser(sendIntent, title);
                        shareIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        startActivity(shareIntent);
                    } catch (Throwable t) {
                        t.printStackTrace();
                    }
                }
            });
        }

        @JavascriptInterface
        public boolean isNativeApp() {
            return true;
        }

        @JavascriptInterface
        public boolean hasNotificationSupport() {
            return true;
        }

        @JavascriptInterface
        public void requestNotificationPermission() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    checkAndRequestNotificationPermission();
                }
            });
        }

        @JavascriptInterface
        public void showNotification(final String title, final String message) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    postNativeNotification(title, message, "instant_notif");
                }
            });
        }

        @JavascriptInterface
        public void schedulePrayerAlarm(final String prayerKey, final String title, final String message, final double triggerAtMillis) {
            final long trigger = (long) triggerAtMillis;
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        scheduleNativeAlarm(prayerKey, title, message, trigger);
                    } catch (Throwable t) {
                        t.printStackTrace();
                    }
                }
            });
        }

        @JavascriptInterface
        public void schedulePrayerAlarm(final String prayerKey, final String title, final String message, final long triggerAtMillis) {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        scheduleNativeAlarm(prayerKey, title, message, triggerAtMillis);
                    } catch (Throwable t) {
                        t.printStackTrace();
                    }
                }
            });
        }

        @JavascriptInterface
        public void cancelAllPrayerAlarms() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    try {
                        cancelAllNativeAlarms();
                    } catch (Throwable t) {
                        t.printStackTrace();
                    }
                }
            });
        }

        @JavascriptInterface
        public void savePreference(final String key, final String value) {
            if (key == null || value == null) return;
            try {
                SharedPreferences prefs = getSharedPreferences("quran_prefs", Context.MODE_PRIVATE);
                prefs.edit().putString(key, value).apply();
            } catch (Throwable t) {
                t.printStackTrace();
            }
        }

        @JavascriptInterface
        public String getPreference(final String key, final String defaultValue) {
            if (key == null) return defaultValue;
            try {
                SharedPreferences prefs = getSharedPreferences("quran_prefs", Context.MODE_PRIVATE);
                return prefs.getString(key, defaultValue);
            } catch (Throwable t) {
                t.printStackTrace();
                return defaultValue;
            }
        }

        @JavascriptInterface
        public void exitApp() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    finish();
                }
            });
        }

        @JavascriptInterface
        public boolean hasCompassSupport() {
            SensorManager sm = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
            if (sm == null) return false;
            return sm.getDefaultSensor(Sensor.TYPE_ROTATION_VECTOR) != null ||
                   (sm.getDefaultSensor(Sensor.TYPE_ACCELEROMETER) != null && sm.getDefaultSensor(Sensor.TYPE_MAGNETIC_FIELD) != null);
        }

        @JavascriptInterface
        public void startCompass() {
            isCompassRequested = true;
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    registerCompassListener();
                }
            });
        }

        @JavascriptInterface
        public void stopCompass() {
            isCompassRequested = false;
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    unregisterCompassListener();
                }
            });
        }

        @JavascriptInterface
        public float getCompassHeading() {
            return currentAzimuth;
        }
    }

    private void checkAndRequestNotificationPermission() {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                if (!isFinishing() && !isDestroyed()) {
                    if (checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) {
                        requestPermissions(new String[]{Manifest.permission.POST_NOTIFICATIONS}, PERMISSION_REQ_POST_NOTIF);
                    }
                }
            }
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    private void createNotificationChannel() {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                NotificationChannel channel = new NotificationChannel(
                    PrayerAlarmReceiver.CHANNEL_ID,
                    "Jadwal Sholat Indonesia",
                    NotificationManager.IMPORTANCE_HIGH
                );
                channel.setDescription("Pemberitahuan waktu sholat di bilah atas HP");
                channel.enableVibration(true);
                channel.setVibrationPattern(new long[]{0, 350, 150, 350});

                NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
                if (nm != null) {
                    nm.createNotificationChannel(channel);
                }
            }
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    private void postNativeNotification(String title, String message, String tag) {
        try {
            checkAndRequestNotificationPermission();

            NotificationManager nm = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm == null) return;

            Uri defaultSound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);

            Intent intent = new Intent(this, MainActivity.class);
            intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
            PendingIntent pendingIntent = PendingIntent.getActivity(
                this, 0, intent,
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT : PendingIntent.FLAG_UPDATE_CURRENT
            );

            Notification.Builder builder;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                builder = new Notification.Builder(this, PrayerAlarmReceiver.CHANNEL_ID);
            } else {
                builder = new Notification.Builder(this);
            }

            // Gunakan ikon status bar 2D khusus yang aman dari RemoteServiceException
            int smallIconRes = R.drawable.ic_notification_prayer;
            try {
                builder.setSmallIcon(smallIconRes);
            } catch (Throwable t) {
                builder.setSmallIcon(android.R.drawable.ic_popup_reminder);
            }

            builder.setContentTitle(title)
                   .setContentText(message)
                   .setContentIntent(pendingIntent)
                   .setAutoCancel(true)
                   .setPriority(Notification.PRIORITY_HIGH)
                   .setDefaults(Notification.DEFAULT_ALL)
                   .setSound(defaultSound);

            nm.notify(tag.hashCode(), builder.build());
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    private void scheduleNativeAlarm(String prayerKey, String title, String message, long triggerAtMillis) {
        try {
            if (triggerAtMillis <= System.currentTimeMillis()) {
                return;
            }

            AlarmManager am = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
            if (am == null) return;

            Intent intent = new Intent(this, PrayerAlarmReceiver.class);
            intent.putExtra("title", title);
            intent.putExtra("message", message);
            intent.putExtra("prayerKey", prayerKey);

            int reqCode = prayerKey.hashCode();
            PendingIntent pi = PendingIntent.getBroadcast(
                this,
                reqCode,
                intent,
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT : PendingIntent.FLAG_UPDATE_CURRENT
            );

            // Periksa izin Exact Alarm secara aman untuk Android 12 (API 31)+
            boolean scheduled = false;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                try {
                    if (am.canScheduleExactAlarms()) {
                        am.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, triggerAtMillis, pi);
                        scheduled = true;
                    }
                } catch (SecurityException se) {
                    scheduled = false;
                }
            } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                try {
                    am.setExactAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, triggerAtMillis, pi);
                    scheduled = true;
                } catch (SecurityException se) {
                    scheduled = false;
                }
            }

            // Fallback non-exact alarm jika izin exact alarm tidak diizinkan oleh sistem
            if (!scheduled) {
                try {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                        am.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, triggerAtMillis, pi);
                    } else {
                        am.set(AlarmManager.RTC_WAKEUP, triggerAtMillis, pi);
                    }
                } catch (Throwable fallbackErr) {
                    fallbackErr.printStackTrace();
                }
            }
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    private void cancelAllNativeAlarms() {
        try {
            AlarmManager am = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
            if (am == null) return;

            String[] keys = {"subuh", "dzuhur", "ashar", "maghrib", "isya", "imsak", "dhuha"};
            for (String k : keys) {
                Intent intent = new Intent(this, PrayerAlarmReceiver.class);
                PendingIntent pi = PendingIntent.getBroadcast(
                    this,
                    k.hashCode(),
                    intent,
                    Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_NO_CREATE : PendingIntent.FLAG_NO_CREATE
                );
                if (pi != null) {
                    am.cancel(pi);
                }
            }
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    private boolean isKeepScreenOnRequested = false;

    private void applyKeepScreenOn(final boolean enable) {
        isKeepScreenOnRequested = enable;
        try {
            if (enable) {
                getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            } else {
                getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
            }
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    private void applyFullscreen(boolean enable) {
        // Mode layar penuh dinonaktifkan secara permanen
        // Memastikan status bar dan navigation bar selalu tampak normal
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                WindowInsetsController controller = getWindow().getInsetsController();
                if (controller != null) {
                    controller.show(WindowInsets.Type.statusBars() | WindowInsets.Type.navigationBars());
                }
            } else {
                getWindow().getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE);
            }
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Hardware volume rocker routes directly to media volume
        setVolumeControlStream(android.media.AudioManager.STREAM_MUSIC);

        // Buat Notification Channel untuk Jadwal Sholat
        createNotificationChannel();

        // Inisialisasi WebView Layar Penuh
        webView = new WebView(this);
        setContentView(webView);

        // Security Hardened WebSettings
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setCacheMode(WebSettings.LOAD_DEFAULT);

        // Security enhancements
        settings.setAllowFileAccess(true); // Diperlukan untuk memuat file android_asset
        settings.setAllowFileAccessFromFileURLs(false); // Mencegah akses silang berkas lokal
        settings.setAllowUniversalAccessFromFileURLs(false); // Mencegah skrip universal
        settings.setGeolocationEnabled(false); // Tanpa pelacakan lokasi

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            settings.setSafeBrowsingEnabled(true);
        }

        // Hardware Acceleration
        webView.setLayerType(View.LAYER_TYPE_HARDWARE, null);

        // Bridge JavaScript interface untuk Android Native
        webView.addJavascriptInterface(new WebAppInterface(), "AndroidBridge");

        // Tangani navigasi internal WebView secara aman (Sandbox & External Intent dengan validasi skema)
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (url == null) return false;
                if (url.startsWith("file:///android_asset/")) {
                    return false; // Izinkan aset lokal internal aplikasi
                }
                // Delegasikan URL eksternal yang diizinkan (https, http, mailto, tel, whatsapp) ke browser / aplikasi sistem
                try {
                    Uri parsedUri = Uri.parse(url);
                    String scheme = parsedUri.getScheme();
                    if (scheme != null) {
                        String lowerScheme = scheme.toLowerCase();
                        if ("https".equals(lowerScheme) || "http".equals(lowerScheme) ||
                            "mailto".equals(lowerScheme) || "tel".equals(lowerScheme) ||
                            "whatsapp".equals(lowerScheme)) {
                            Intent intent = new Intent(Intent.ACTION_VIEW, parsedUri);
                            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                            startActivity(intent);
                            return true;
                        }
                    }
                    // Tolak skema berbahaya lainnya (intent://, file://, content://, javascript:, data:)
                    return true;
                } catch (Throwable t) {
                    t.printStackTrace();
                    return true;
                }
            }
        });
        webView.setWebChromeClient(new WebChromeClient());

        // Daftarkan listener Predictive Back Gesture untuk Android 13+ (API 33+)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            try {
                getOnBackInvokedDispatcher().registerOnBackInvokedCallback(
                    OnBackInvokedDispatcher.PRIORITY_DEFAULT,
                    new OnBackInvokedCallback() {
                        @Override
                        public void onBackInvoked() {
                            onBackPressed();
                        }
                    }
                );
            } catch (Throwable ignored) {}
        }

        // Muat Al-Qur'an Indonesia dari aset lokal 100% offline
        webView.loadUrl("file:///android_asset/www/index.html");
    }

    private long lastBackPressTime = 0;

    @SuppressWarnings("deprecation")
    @Override
    public void onBackPressed() {
        if (webView != null) {
            webView.evaluateJavascript(
                "(function() { return (window.app && typeof window.app.handleAndroidBack === 'function') ? window.app.handleAndroidBack() : false; })()",
                new ValueCallback<String>() {
                    @Override
                    public void onReceiveValue(String value) {
                        boolean handled = "true".equalsIgnoreCase(value);
                        if (!handled) {
                            runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    if (System.currentTimeMillis() - lastBackPressTime < 2000) {
                                        finish();
                                    } else {
                                        lastBackPressTime = System.currentTimeMillis();
                                        Toast.makeText(MainActivity.this, "Tekan sekali lagi untuk keluar", Toast.LENGTH_SHORT).show();
                                    }
                                }
                            });
                        }
                    }
                }
            );
        } else {
            super.onBackPressed();
        }
    }

    private boolean isCompassRequested = false;
    private boolean isCompassRegistered = false;
    private SensorManager sensorManager;
    private SensorEventListener compassListener;
    private float[] lastAccelerometer = new float[3];
    private float[] lastMagnetometer = new float[3];
    private boolean lastAccelerometerSet = false;
    private boolean lastMagnetometerSet = false;
    private float[] rotationMatrix = new float[9];
    private float[] orientationValues = new float[3];
    private long lastCompassDispatchTime = 0;
    private float currentAzimuth = 0f;

    private void registerCompassListener() {
        if (isCompassRegistered) return;
        try {
            if (sensorManager == null) {
                sensorManager = (SensorManager) getSystemService(Context.SENSOR_SERVICE);
            }
            if (sensorManager == null) return;

            final Sensor rotationVector = sensorManager.getDefaultSensor(Sensor.TYPE_ROTATION_VECTOR);

            compassListener = new SensorEventListener() {
                @Override
                public void onSensorChanged(SensorEvent event) {
                    float azimuth = -1f;
                    if (event.sensor.getType() == Sensor.TYPE_ROTATION_VECTOR) {
                        SensorManager.getRotationMatrixFromVector(rotationMatrix, event.values);
                        SensorManager.getOrientation(rotationMatrix, orientationValues);
                        azimuth = (float) Math.toDegrees(orientationValues[0]);
                    } else if (event.sensor.getType() == Sensor.TYPE_ACCELEROMETER) {
                        System.arraycopy(event.values, 0, lastAccelerometer, 0, event.values.length);
                        lastAccelerometerSet = true;
                    } else if (event.sensor.getType() == Sensor.TYPE_MAGNETIC_FIELD) {
                        System.arraycopy(event.values, 0, lastMagnetometer, 0, event.values.length);
                        lastMagnetometerSet = true;
                    }

                    if (event.sensor.getType() != Sensor.TYPE_ROTATION_VECTOR) {
                        if (lastAccelerometerSet && lastMagnetometerSet) {
                            if (SensorManager.getRotationMatrix(rotationMatrix, null, lastAccelerometer, lastMagnetometer)) {
                                SensorManager.getOrientation(rotationMatrix, orientationValues);
                                azimuth = (float) Math.toDegrees(orientationValues[0]);
                            }
                        }
                    }

                    if (azimuth >= -360f && azimuth <= 360f && azimuth != -1f) {
                        if (azimuth < 0) azimuth += 360f;
                        currentAzimuth = azimuth;

                        long now = System.currentTimeMillis();
                        if (now - lastCompassDispatchTime >= 35) { // ~28 FPS smooth sensor delivery
                            lastCompassDispatchTime = now;
                            final float finalAzimuth = azimuth;
                            runOnUiThread(new Runnable() {
                                @Override
                                public void run() {
                                    if (webView != null) {
                                        webView.evaluateJavascript(
                                            "(function(){ if(window.app && typeof window.app.onCompassHeadingUpdate === 'function') { window.app.onCompassHeadingUpdate(" + finalAzimuth + "); } })()",
                                            null
                                        );
                                    }
                                }
                            });
                        }
                    }
                }

                @Override
                public void onAccuracyChanged(Sensor sensor, int accuracy) {}
            };

            if (rotationVector != null) {
                sensorManager.registerListener(compassListener, rotationVector, SensorManager.SENSOR_DELAY_UI);
            } else {
                Sensor accel = sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
                Sensor mag = sensorManager.getDefaultSensor(Sensor.TYPE_MAGNETIC_FIELD);
                if (accel != null) sensorManager.registerListener(compassListener, accel, SensorManager.SENSOR_DELAY_UI);
                if (mag != null) sensorManager.registerListener(compassListener, mag, SensorManager.SENSOR_DELAY_UI);
            }
            isCompassRegistered = true;
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }

    private void unregisterCompassListener() {
        if (!isCompassRegistered || compassListener == null || sensorManager == null) return;
        try {
            sensorManager.unregisterListener(compassListener);
        } catch (Throwable t) {
            t.printStackTrace();
        }
        isCompassRegistered = false;
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (webView != null) {
            webView.onPause();
        }
        unregisterCompassListener();
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                CookieManager.getInstance().flush();
            }
        } catch (Exception ignored) {}
    }

    @Override
    protected void onDestroy() {
        unregisterCompassListener();
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                CookieManager.getInstance().flush();
            }
        } catch (Exception ignored) {}
        super.onDestroy();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (webView != null) {
            webView.onResume();
        }
        if (isKeepScreenOnRequested) {
            applyKeepScreenOn(true);
        }
        if (isCompassRequested) {
            registerCompassListener();
        }
    }
}
