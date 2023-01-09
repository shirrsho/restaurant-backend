from items.serializers import ItemSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from rest_framework.permissions import IsAuthenticated
# Create your views here.

from items.models import Item

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def items(request):
    if request.method == "GET":
        items = Item.objects.all()
        serializer = ItemSerializer(items,many=True)
        return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def itemdetail(request,pk):
    if request.method == "GET":
        items = Item.objects.get(pk=pk)
        serializer = ItemSerializer(items)
        return Response(serializer.data)
        