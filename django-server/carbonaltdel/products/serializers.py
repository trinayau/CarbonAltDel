from rest_framework import serializers
from .models import Category, Product
from django.db.models import Min

class ProductSerializer(serializers.ModelSerializer):
    emission_calculated = serializers.SerializerMethodField('_emission_calculated')
    image = serializers.SerializerMethodField('get_image_from_category')
    total = serializers.SerializerMethodField('_total_price')

    def _emission_calculated(self, product_object):
        weight = getattr(product_object, "weight")
        if weight:
            return weight * product_object.offset
    
    def get_image_from_category(self, product_object):
        category = getattr(product_object, "category")
        if category:
            return category.image_url
    
    def _total_price(self, product_object):
        return product_object.price + product_object.offset
    class Meta:
        model = Product
        fields = ['id', 'category', 'name', 'supplier', 'slug', 'price', 'weight', 'offset', 'date_added','emission_calculated', 'image', 'total']

class CategorySerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)
    minimum_product_price = serializers.SerializerMethodField('_minimum_product_price')
    minimum_offset_price = serializers.SerializerMethodField('_minimum_offset_price')
    cheapest_product = serializers.SerializerMethodField('get_cheapest_product')

    def _minimum_product_price(self, category_object):
        return category_object.products.aggregate(Min('price'))['price__min']

    def _minimum_offset_price(self, category_object):
        return category_object.products.aggregate(Min('offset'))['offset__min']

    # get cheapest product in a category and return product as json object
    def get_cheapest_product(self, category_object):
        cheapest = category_object.products.order_by('price').first()
        data = ProductSerializer(cheapest).data
        return data

    class Meta:
        model = Category
        fields = ('id', 'name', 'slug', 'description','image_url','products', 'minimum_product_price', 'minimum_offset_price', 'cheapest_product')

