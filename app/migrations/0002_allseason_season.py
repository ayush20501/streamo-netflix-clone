# Generated by Django 4.0.5 on 2022-07-18 09:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Allseason',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='Season',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('episodename', models.CharField(default='', max_length=100)),
                ('seriesname', models.CharField(default='', max_length=100)),
                ('episodenumber', models.CharField(default='', max_length=100)),
                ('episodeurl', models.URLField(default='')),
                ('episodeimage', models.URLField(default='')),
                ('seasonnumber', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.allseason')),
            ],
        ),
    ]
