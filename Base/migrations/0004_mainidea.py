# Generated by Django 5.1.1 on 2024-09-27 14:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Base', '0003_rename_img_profile_proimg'),
    ]

    operations = [
        migrations.CreateModel(
            name='Mainidea',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('WebTopic', models.CharField(max_length=20)),
            ],
        ),
    ]
