# Generated by Django 4.0.5 on 2022-07-25 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0015_alter_database_homepagecategory'),
    ]

    operations = [
        migrations.AddField(
            model_name='database',
            name='totalseason',
            field=models.ManyToManyField(blank=True, null=True, to='app.allseason'),
        ),
    ]
