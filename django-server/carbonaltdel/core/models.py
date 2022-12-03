from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)    
    body = models.TextField()
    date = models.DateTimeField(auto_now_add=True, null=True)
