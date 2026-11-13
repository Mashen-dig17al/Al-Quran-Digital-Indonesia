package com.mashendig17al.quranpro;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.Build;

public class PrayerAlarmReceiver extends BroadcastReceiver {
    public static final String CHANNEL_ID = "prayer_reminder_channel";

    @Override
    public void onReceive(Context context, Intent intent) {
        if (intent == null) return;

        try {
            String title = intent.getStringExtra("title");
            String message = intent.getStringExtra("message");
            String prayerKey = intent.getStringExtra("prayerKey");

            if (title == null || title.isEmpty()) {
                title = "🕌 Waktu Sholat Telah Tiba";
            }
            if (message == null || message.isEmpty()) {
                message = "Mari dirikan sholat tepat waktu.";
            }
            if (prayerKey == null || prayerKey.isEmpty()) {
                prayerKey = "prayer";
            }

            NotificationManager nm = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);
            if (nm == null) return;

            Uri defaultSound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                NotificationChannel channel = new NotificationChannel(
                    CHANNEL_ID,
                    "Jadwal Sholat Indonesia",
                    NotificationManager.IMPORTANCE_HIGH
                );
                channel.setDescription("Pemberitahuan waktu sholat di bilah atas HP");
                channel.enableVibration(true);
                channel.setVibrationPattern(new long[]{0, 350, 150, 350});
                nm.createNotificationChannel(channel);
            }

            Intent openAppIntent = new Intent(context, MainActivity.class);
            openAppIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP | Intent.FLAG_ACTIVITY_SINGLE_TOP);
            PendingIntent pendingIntent = PendingIntent.getActivity(
                context,
                0,
                openAppIntent,
                Build.VERSION.SDK_INT >= Build.VERSION_CODES.M ? PendingIntent.FLAG_IMMUTABLE | PendingIntent.FLAG_UPDATE_CURRENT : PendingIntent.FLAG_UPDATE_CURRENT
            );

            Notification.Builder builder;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                builder = new Notification.Builder(context, CHANNEL_ID);
            } else {
                builder = new Notification.Builder(context);
            }

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

            nm.notify(prayerKey.hashCode(), builder.build());
        } catch (Throwable t) {
            t.printStackTrace();
        }
    }
}
