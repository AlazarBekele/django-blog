from django.shortcuts import render
from .models import News, Category, Profile, Mainidea

# Create your views here.
def index(request): 
    latest_news = News.objects.filter().order_by('-created').first()
    top_stories = News.objects.filter().order_by('created')[:4]
    imgTop = News.objects.filter().order_by('-title').last()
    footer = News.objects.filter().order_by('title')[:8]

    trand = News.objects.filter().order_by('-title')[:3]
    largeTrand = News.objects.filter().order_by('category')[:2]

    # Header dynamic

    head = News.objects.filter().order_by('category')[:4]

    context = {
        'latest_news' : latest_news,
        'top_stories' : top_stories,
        'imgTop' : imgTop,
        'trand' : trand,
        'largeTrand' : largeTrand,


        'head' : head,

        'footer' : footer,
    }
    return render(request, 'index.html', context=context)


def detail(request, id):
    news = News.objects.get(pk=id)
    categories = Category.objects.all()

    context = {
        'news' : news,
        'categories' : categories
    }
    return render(request, 'post-details.html', context=context)

def other(request):
    other = News.objects.all()

    context = {
        'other' : context
    }

    return render (request, 'index.html', context)

def ProfileDeploy (request):
    ProfileDeploy = Profile.objects.filter()[:2]

    context = {
        'ProfileDeploy' : ProfileDeploy
    }

    return render (request, 'post-details.html', context=context)


def footerIdea (request):
    footerIdea = Mainidea.objects.all()

    context = {
        'footerIdea' : footerIdea
    }

    return render (request, 'post-details.html', context=context)