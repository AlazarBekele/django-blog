from django.shortcuts import render
from .models import News, Category

# Create your views here.
def index(request):
    latest_news = News.objects.filter().order_by('-created').first()
    top_stories = News.objects.filter().order_by('-created')[:3]

    context = {
        'latest_news' : latest_news,
        'top_stories' : top_stories
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
