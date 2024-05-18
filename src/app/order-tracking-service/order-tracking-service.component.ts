angular.module('OrderTrackingApp', [])
.controller('OrderTrackingController', ['$scope', 'OrderTrackingService', 'NotificationService', 
    function($scope: { orders: any[]; }, OrderTrackingService: { getOrders: () => Promise<any>; }, NotificationService: { listenForOrderUpdates: (arg0: (updatedOrder: Order) => void) => void; notifyOrderStatusChange: (arg0: Order) => void; }) {
    $scope.orders: Order[] = [];

    // Fetch orders from API
    OrderTrackingService.getOrders().then(function(response) {
        $scope.orders = response.data;
    });

    // Listen for order status changes
    NotificationService.listenForOrderUpdates(function(updatedOrder: Order) {
        // Update order status in UI
        $scope.orders.forEach(function(order, index) {
            if (order.id === updatedOrder.id) {
                $scope.orders[index] = updatedOrder;
                // Notify user about status change
                NotificationService.notifyOrderStatusChange(updatedOrder);
            }
        });
    });
}])
.factory('OrderTrackingService', ['$http', 
    function($http) {
    return {
        getOrders: function(): ng.IPromise<Order[]> {
            return $http.get<Order[]>('api/orders');
        }
    };
}])
.factory('NotificationService', function() {
    return {
        listenForOrderUpdates: function(callback: (updatedOrder: Order) => void) {
            // Implement WebSocket or other real-time communication method
            // to listen for order status updates
        },
        notifyOrderStatusChange: function(order: Order) {
            // Implement notification method
        }
    };
});
