from dataclasses import field
from rest_framework.serializers import ModelSerializer
from items.models import Item

class ItemSerializer(ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'