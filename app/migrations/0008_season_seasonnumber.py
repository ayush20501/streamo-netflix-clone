# Generated by Django 4.0.5 on 2022-07-19 07:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_allseason'),
    ]

    operations = [
        migrations.AddField(
            model_name='season',
            name='seasonnumber',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='app.allseason'),
        ),
    ]
