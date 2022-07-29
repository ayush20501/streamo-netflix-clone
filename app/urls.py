import imp
from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path("",views.loginpage,name='login'),
    path('register/',views.register,name='register'),
    path('logout/',views.logoutpage,name='logout'),
    path("changepassword/",views.changepassword,name="changepassword"),
    path("home/",views.home,name='home'),
    path("moviedetail/",views.moviedetail,name='moviedetail'),
    path("seriesdetail/",views.seriesdetail,name='seriesdetail'),
    path("episodes/<str:seriesname>/",views.episode,name="episode"),
    path("watchepisodes/<path:episodelink>/",views.watchepisode,name="watchepisode"),
    path("contact/",views.contact,name="contact"),
    path('sample/',views.sample,name='sample'),
]
