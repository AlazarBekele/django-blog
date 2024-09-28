from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=50)


    def __str__(self):
        return self.name


class News(models.Model):
    title = models.CharField(max_length=200)
    created = models.DateTimeField(auto_created=True, auto_now_add=True)
    view = models.IntegerField(default=0)
    description =models.TextField()
    image = models.ImageField(upload_to='photo/')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)


    def __str__(self) -> str:
        return self.title


class ContactMessages(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    phone = models.CharField(max_length=12)
    subject = models.CharField(max_length=40)
    message = models.TextField()


    def __str__(self) -> str:
        return self.name + " " + self.email

class Profile (models.Model):
    name = models.CharField(max_length=20)
    ProImg = models.ImageField (upload_to='photo/')
    username = models.CharField (max_length=30)

    def __str__(self) -> str:
        return self.username
    
class Mainidea (models.Model):
    title = models.CharField (max_length=20)
    startCre = models.DateTimeField (auto_created=True, auto_now_add=True)

    def __str__(self) -> str:
        return self.WebTopic