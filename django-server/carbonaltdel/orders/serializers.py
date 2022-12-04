# serializer for orders
from rest_framework import serializers
from .models import Order, OrderItem
from products.models import Product
from products.serializers import ProductSerializer
from django.contrib.auth import get_user_model
User = get_user_model()


class OrderSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    total_price = serializers.SerializerMethodField('get_total_price')
    total_emissions = serializers.SerializerMethodField('get_total_emissions')
    class Meta:
        model = Order
        fields = '__all__'
        depth = 1
    
    def create(self, validated_data):
        customer = self.context['request'].user
        products = validated_data.pop('products')
        order = Order.objects.create(**validated_data)
        for product in products:
            OrderItem.objects.create(order=order, product=product)
        
        order.creator = self.context['request'].user
        order.save()
        return order

    def get_products(self, obj):
        return ProductSerializer(obj.products.all(), many=True).data
    
    # get total price of order from order items
    def get_total_price(self, obj):
        total = 0
        for item in obj.items.all():
            total += item.get_total
        return total
    
    # get total emissions of order from order items
    def get_total_emissions(self, obj):
        total = 0
        for item in obj.items.all():
            total += item.get_total_emissions
        return total


class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'
    
    def create(self, validated_data):
        order_item = OrderItem.objects.create(**validated_data)
        order_item.customer = self.context['request'].user
        order_item.save()
        return order_item

