from rest_framework import serializers
from .models import Category, Product

class ProductSerializer(serializers.ModelSerializer):
    emission_calculated = serializers.SerializerMethodField('_emission_calculated')

    def _emission_calculated(self, product_object):
        weight = getattr(product_object, "weight")
        if weight:
            return weight * product_object.offset

    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'supplier', 'slug', 'price', 'weight', 'offset', 'date_added', 'emission_calculated']

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'description', 'image', 'products')

