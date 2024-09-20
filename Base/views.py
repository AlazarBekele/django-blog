from django.shortcuts import render
from .models import News

# Create your views here.
def index(request):
    latest_news = News.objects.filter().order_by('-created').first()
    top_stories = News.objects.filter().order_by('-created')[:3]

    context = {
        'latest_news' : latest_news,
        'top_stories' : top_stories
    }
    return render(request, 'index.html', context=context)