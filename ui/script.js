       
var dashboardApp = angular.module('crystalBallApp', []); 

dashboardApp.controller('mainCtrl', function ($scope, $http) {
    
    // Check user access token.
    $http.get('/auth/authenticated').then(function (res) {
        $scope.isAuthenticated = res.data.authenticated;
        if ($scope.isAuthenticated === false) {
            $scope.isReady = true;
            return;
        }
    });
    
    Office.initialize = function (reason) { 
        $(document).ready(function () {
            init();
        });
    }; 
        
    function init(){
        
        var item = Office.cast.item.toItemRead(Office.context.mailbox.item);

        var from;
        if (item.itemType === Office.MailboxEnums.ItemType.Message) {
            from = Office.cast.item.toMessageRead(item).from;
        } else if (item.itemType === Office.MailboxEnums.ItemType.Appointment) {
            from = Office.cast.item.toAppointmentRead(item).organizer;
        }

        if (from) {
            // Access token is valid. Fetch constituent record.
            $http.get('/api/constituentSearch/' + from.emailAddress).then(function (res) {
                $scope.constituentFound = false; 
                if(res.data){
                    if(res.data.count > 0){
                        $scope.constituentId = res.data.value[0].id;
                        $scope.constituentFound = true;                              
                    }
                }
                
                if($scope.constituentFound){
                    $http.get('/api/constituents/' + $scope.constituentId).then(function (res) {
                        $scope.constituent = res.data;
                    });
                } 
                
                $scope.isReady = true;
            });
        }
    }
});
