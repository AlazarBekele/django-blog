from django.contrib import admin
from .models import Category, News, ContactMessages, Profile

# Register your models here.
admin.site.register(Category)
admin.site.register(News)
admin.site.register(ContactMessages)
admin.site.register(Profile)