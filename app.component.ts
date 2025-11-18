var app = angular.module('ProjectInquiryApp', []);

app.controller('InquiryController', ['$scope', function($scope) {
    
    // Initial data structure for two-way binding (ng-model)
    // IMPORTANT: Checkbox and multiselect need default values
    $scope.initialFormData = {
        contact_name: '',
        email: '',
        phone: '',
        company_name: '',
        services_required: [], // Must be an array for multiple select
        budget_min: null,
        details_objective: '',
        urgent_priority: false, // Default boolean for checkbox
        terms_agreed: false
    };
    
    // Initialize the main model for the form
    $scope.formData = angular.copy($scope.initialFormData);
    
    // Variable to hold the successfully submitted data
    $scope.submittedData = {};
    // Flag to control the visibility of the submitted data display area
    $scope.submissionSuccess = false;

    // --- Submission Function ---
    $scope.submitInquiry = function(isValid) {
        // Check if the form is valid (based on 'required' and other validation)
        if (isValid) {
            // 1. Store the form data
            $scope.submittedData = angular.copy($scope.formData);
            
            // 2. Display the data area
            $scope.submissionSuccess = true;
            
            // 3. Optional: Reset the form fields after successful submission
            // We'll reset the $scope.formData to the initial state
            // and tell the form controller ($setPristine) to reset validation states.
            $scope.resetForm();

        } else {
            // If the form is invalid, you can add an alert or error message
            alert('Please fill out all required fields correctly.');
        }
    };
    
    // --- Clear Form/Data Function ---
    // Clears both the display area and the form itself.
    $scope.clearSubmission = function() {
        // Clear the form fields by resetting the model
        $scope.resetForm();
        
        // Hide the submitted data display
        $scope.submissionSuccess = false;
        $scope.submittedData = {};
    };

    // Helper function to reset the form model and validation state
    $scope.resetForm = function() {
        // Reset model to initial blank state
        $scope.formData = angular.copy($scope.initialFormData);
        
        // Reset the form's validation state (ng-pristine, ng-untouched)
        // This is crucial to clear error messages after submission/clear
        if ($scope.inquiryForm) {
            $scope.inquiryForm.$setPristine();
            $scope.inquiryForm.$setUntouched();
        }
    };
    
    // Initialize the form state when the controller loads
    $scope.resetForm();
}]);
