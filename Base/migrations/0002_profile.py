# Generated by Django 5.1.1 on 2024-09-26 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('Img', models.ImageField(upload_to='photo/')),
                ('username', models.CharField(max_length=30)),
            ],
        ),
    ]
