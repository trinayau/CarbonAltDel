from io import BytesIO
from PIL import Image

from django.core.files import File
from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField()
    description = models.TextField(blank=True, null=True)
    image_url = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return f'/{self.slug}'
    
    # def get_image(self):
    #     if self.image:
    #         return 'http://127.0.0.1:8000' + self.image.url
    # def get_thumbnail(self):
    #     if self.thumbnail:
    #         return 'http://127.0.0.1:8000' + self.thumbnail.url
    #     else:
    #         if self.image:
    #             self.thumbnail = self.make_thumbnail(self.image)
    #             self.save()
    #             return 'http://127.0.0.1:8000' + self.thumbnail.url
    #         else:
    #             return ''
    
    # def make_thumbnail(self, image, size=(300, 300)):
    #     img = Image.open(image)
    #     img.convert('RGB')
    #     img.thumbnail(size)

    #     thumb_io = BytesIO()
    #     img.save(thumb_io, 'JPEG', quality=85)

    #     thumbnail = File(thumb_io, name=image.name)

        return thumbnail
class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    supplier = models.CharField(max_length=255)
    slug = models.SlugField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    weight = models.IntegerField(("Weight (kg)"), blank=True, null=True)
    offset = models.DecimalField(max_digits=6, decimal_places=2)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('offset',)

    def __str__(self):
        return self.supplier
        
    def get_absolute_url(self):
        return f'/{self.category.slug}/{self.slug}/'
    
    # def get_image(self):
    #     if self.image:
    #         return 'http://127.0.0.1:8000' + self.image.url
    #     return ''
    
    # def get_thumbnail(self):
    #     if self.thumbnail:
    #         return 'http://127.0.0.1:8000' + self.thumbnail.url
    #     else:
    #         if self.image:
    #             self.thumbnail = self.make_thumbnail(self.image)
    #             self.save()

    #             return 'http://127.0.0.1:8000' + self.thumbnail.url
    #         else:
    #             return ''
    
    # def make_thumbnail(self, image, size=(300, 200)):
    #     img = Image.open(image)
    #     img.convert('RGB')
    #     img.thumbnail(size)

    #     thumb_io = BytesIO()
    #     img.save(thumb_io, 'JPEG', quality=85)

    #     thumbnail = File(thumb_io, name=image.name)

    #     return thumbnail


