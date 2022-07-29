from django.shortcuts import render, redirect, HttpResponseRedirect
from app.models import Category, HomepageCategory, Movieseriescategory, Database, Season, ComingSoon, Display, Allseason, Topten
from django.contrib.auth import login, logout, authenticate, update_session_auth_hash
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm, PasswordChangeForm
from app.forms import CreationUserForm, ContactForm


@login_required(login_url='login')
def home(request):
    recently = Database.objects.filter(homepagecategory=1)
    trendingmovies = Database.objects.filter(homepagecategory=2)
    newmovies = Database.objects.filter(homepagecategory=3)
    trendingtvshows = Database.objects.filter(homepagecategory=5)
    newtvshows = Database.objects.filter(homepagecategory=6)
    comingsoon = ComingSoon.objects.all()
    display = Display.objects.all()
    topten = Topten.objects.all()

    content = {'recently': recently, 'trendingmovies': trendingmovies,
               'newmovies': newmovies, "trendingtvshows": trendingtvshows, 'newtvshows': newtvshows,
               "type": ['movie', 'series'], 'comingsoon': comingsoon, 'display': display, 'topten': topten}

    return render(request, "index-4.html", content)


@login_required(login_url='login')
def moviedetail(request):
    moviename = request.GET.get('i')
    databases = Database.objects.filter(name=moviename)
    content = {'recently': databases}
    return render(request, 'movie-details.html', content)


@login_required(login_url='login')
def seriesdetail(request):
    seriesname = request.GET.get('i')
    database = Database.objects.filter(name=seriesname)

    content = {'recently': database}
    return render(request, 'series-details.html', content)


@login_required(login_url='login')
def episode(request, seriesname):
    d = None
    string = ""
    a = Database.objects.filter(name=seriesname)
    b = Allseason.objects.all()
    c = request.GET.get('i')

    n = ""
    for p in a:
        n = p.totalseasons

    if c:
        d = Season.objects.filter(seriesname=seriesname, seasonnumber=c)

        if(len(d) == 0):
            string = "season"+" "+str(c)+" "+"(Not Avaliable for this TV show)"
        else:
            string = "Season"+" "+str(c)
    else:
        d = Season.objects.filter(seriesname=seriesname, seasonnumber=1)
        string = "Season"+" "+str(1)

    content = {'category': b, 'values': d,
               "string": string, "range": range(int(n))}
    return render(request, "episodes.html", content)


@login_required(login_url='login')
def watchepisode(request, episodelink):
    print(episodelink)

    content = {'link': episodelink}
    return render(request, "watchepisodes.html", content)


def sample(request):
    return render(request, 'sample.html')


def loginpage(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)

            return redirect('home')

    return render(request, 'login.html')


def register(request):
    form = CreationUserForm()
    if request.method == "POST":
        form = CreationUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    content = {"form": form}
    return render(request, 'signup.html', content)


def logoutpage(request):
    logout(request)
    return redirect('login')


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            form.save()
        return render(request, 'contact-2.html')
    return render(request, 'contact-2.html')


def changepassword(request):
    obj = None
    if request.method == "POST":
        obj = PasswordChangeForm(user=request.user, data=request.POST)
        print(obj)
        if obj.is_valid():
            obj.save()
            update_session_auth_hash(request, obj.user)
            return redirect("login")
    else:
        obj = PasswordChangeForm(user=request.user)
        print(obj)

    return render(request, "changepassword.html", {"form": obj})


def sample(request):
    movies = Database.objects.filter(movieorseries='movie')
    series = Database.objects.filter(movieorseries='series')

    content = {'movies': movies, 'series': series}

    return render(request, 'sample.html', content)
