var app = angular.module('portfolioApp', []);

app.controller('MainController', function($scope) {
    $scope.selectedTab = 'about';

    $scope.selectTab = function(tab) {
        $scope.selectedTab = tab;
    };

    $scope.isSelected = function(tab) {
        return $scope.selectedTab === tab;
    };

    $scope.portfolio = {
        name: "Your Full Name",
        location: "Perungalathur, Chennai, Tamil Nadu, India",
        objective: "A versatile and innovative professional with expertise in cloud computing, SQL development, content creation, digital marketing, and event management. I aim to leverage my diverse skill set to excel in both the digital and creative domains.",
        experience: [
            {
                title: "GCP SQL Developer",
                company: "Accenture, Chennai, India",
                duration: "July 2023 – Present",
                tasks: [
                    "Designed and optimized complex SQL queries to enhance data retrieval processes.",
                    "Worked closely with teams across different departments to manage and execute BigQuery projects.",
                    "Implemented scalable cloud solutions that reduced operational costs.",
                    "Provided guidance and technical support to junior developers."
                ]
            },
            {
                title: "Content Creator & Digital Marketing Specialist",
                company: "Self-employed, Chennai, India",
                duration: "July 2023 – Present",
                tasks: [
                    "Developed and executed a content strategy for Instagram, focusing on minimal art.",
                    "Secured multiple brand partnerships and collaborations.",
                    "Launched an online education platform specializing in art and drawing.",
                    "Created and managed targeted digital marketing campaigns."
                ]
            },
            // Add more experience as needed
        ],
        projects: [
            {
                title: "Online Art Course Development",
                description: "Developed and launched an online art course, focusing on minimal artwork."
            },
            {
                title: "Stock Market Investment",
                description: "Conducted detailed research and investment in stocks related to gold manufacturing and supply."
            },
            // Add more projects as needed
        ]
    };
});
