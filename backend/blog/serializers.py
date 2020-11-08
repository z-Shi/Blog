from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ['id', 'title', 'slug', 'category', 'thumbnail', 'excerpt', 'month', 'day', 'content', 'featured', 'date_created']
        lookup_field = 'slug'
