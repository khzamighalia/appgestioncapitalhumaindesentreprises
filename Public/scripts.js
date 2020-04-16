$(document).ready(function(){
    $(".menu-icons").click(function(){
        $("#akram").slideToggle();
    });
    });

    var x = document.getElementById ("login");
                        var y = document.getElementById ("Signin");
                        var z = document.getElementById ("btn");
                
                        function Signin(){
                            x.style.left = "-400px";
                            y.style.left = "50px";
                            z.style.left = "110px";
                        }
                        function login(){
                            x.style.left = "50px";
                            y.style.left = "450px";
                            z.style.left = "0";
                        }
                        document.getElementById ("inscription1").addEventListener('click',
                         function(){
                            document.querySelector('.hero1').style.display = 'flex' ;
                        });
                        document.querySelector('.close1').addEventListener('click',
                        function(){
                          document.querySelector('.hero1').style.display = 'none';
                        });
