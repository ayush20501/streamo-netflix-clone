# Generated by Django 4.0.5 on 2022-07-24 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0009_contact'),
    ]

    operations = [
        migrations.CreateModel(
            name='Topten',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('number', models.CharField(max_length=100)),
                ('image', models.URLField(blank=True, null=True)),
            ],
        ),
    ]
