from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['customer', 'date_ordered']

@admin.register(models.OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ['order', 'product', 'quantity', 'date_added']
