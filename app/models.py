import email

from django.db import models
# Create your models here.
class Movieseriescategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class HomepageCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Allseason(models.Model):
    name = models.CharField(max_length=1000,default="")

    def __str__(self):
        return self.name

class Database(models.Model):
    name = models.CharField(max_length=100)
    year = models.CharField(max_length=100,default="")
    firstepisode = models.CharField(max_length=100,default="")
    lastepisode = models.CharField(max_length=100,default="")
    writtenby = models.CharField(max_length=100,default="")
    releasedate = models.CharField(max_length=100,default="")
    director = models.CharField(max_length=100,default="")
    distributedby = models.CharField(max_length=100,default="")
    rating = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    quality = models.CharField(max_length=100)
    genere = models.ManyToManyField(Category)
    image = models.URLField(default="")
    movie = models.URLField(default="")
    trailer = models.URLField(default="")
    duration = models.CharField(max_length=100,default="")
    movieseriestype = models.ForeignKey(Movieseriescategory,on_delete=models.CASCADE)
    homepagecategory = models.ManyToManyField(HomepageCategory,default="",null=True,blank=True)
    movietype = models.CharField(max_length=100,default="")
    movieorseries = models.CharField(max_length=100,default="")
    totalseasons = models.CharField(max_length=100,default="")
    totalseason = models.ManyToManyField(Allseason,null=True,blank=True)

    def __str__(self):
        return self.name





class Season(models.Model):
    episodename = models.CharField(max_length=100,default="")
    seriesname = models.CharField(max_length=100,default="")
    seasonnumber = models.ForeignKey(Allseason,on_delete=models.CASCADE,blank=True,null=True)
    episodenumber = models.CharField(max_length=100,default="")
    episodeurl = models.URLField(default="")
    episodeimage = models.URLField(default="")

    def __str__(self):
        return self.episodename

class ComingSoon(models.Model):
    name = models.CharField(max_length=100,default="")
    releasedata = models.CharField(max_length=100,default="")
    imageurl = models.URLField(default="")
    trailer = models.URLField(default="",blank=True,null=True)
    type = models.CharField(max_length=100,default="")

    def __str__(self):
        return self.name

class Display(models.Model):
    name = models.CharField(max_length=1000,default="")
    rating = models.CharField(max_length=1000,default="")
    runtime = models.CharField(max_length=1000,default="")
    seasons = models.CharField(max_length=100,null=True,blank=True)
    genre = models.CharField(max_length=1000,default="")
    quality = models.CharField(max_length=1000,default="")
    trailer = models.URLField(default="",blank=True,null=True)
    imageurl = models.URLField(default="",blank=True,null=True)

    def __str__(self):
        return self.name


class Contact(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    message = models.CharField(max_length=1000)

    def __str__(self):
        
        return self.firstname

class Topten(models.Model):
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=100)
    image = models.URLField(null=True,blank=True)
    trailer = models.URLField(null=True,blank=True)

    def __str__(self):
        return self.name