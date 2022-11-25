// light mode/dark mode toggle
$( ".change" ).on("click", function() { 
            if( $( "body" ).hasClass( "dark" )) { 
                $( "body" ).removeClass( "dark" ); 
                $( ".change" ).text( "OFF" ); 
            } else { 
                $( "body" ).addClass( "dark" ); 
                $( ".change" ).text( "ON" ); 
            } 
        }); 

// hide/show
$(document).ready(function(){
    $("#hide").click(function(){
        $("#ppp").hide("slow");
    });
    $("#show").click(function(){
       $("#ppp").show("slow")     
    });
});

// Fade
$(document).ready(function(){
    $("#but").click(function(){
      $("#text1").fadeOut();
      $("#text2").fadeOut("slow");
      $("#text3").fadeOut(3000);
    });
  });
  $(document).ready(function(){
    $("#butt").click(function(){
      $("#text1").fadeIn();
      $("#text2").fadeIn("slow");
      $("#text3").fadeIn(3000);
    });
  });

//   Slide
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

//   Animate
$(document).ready(function(){
    $("#btn").click(function(){
        $("#anim").animate({
            left: '250px',
            height: '+=50px',
            width: '+=50px',
        });
    });
});

// Stop()
$(document).ready(function(){
    $("#st").click(function(){
        $("#sto").slideToggle(5000);
    });
    $("#stop").click(function(){
        $("#sto").stop();
    })
});

// Callback
$(document).ready(function(){
    $(".hidebut").click(function(){
        $("h4").hide("slow", function(){
            alert("The heading is hidden");
        });
    });
});

// Chaining
$(document).ready(function(){
    $("#cha").click(function(){
        $("#chain").slideUp(2000).slideDown(2000);
    });
});

// Get Content
$(document).ready(function(){
    $("#text").click(function(){
        alert("Text:" + $("#emp").text());
    });
    $("#html").click(function(){
        alert("HTML:" + $("#emp").html());
    });
});

$(document).ready(function(){
    $("#rr").click(function(){
        alert("Value:" + $("#p").val());
    });
});

$(document).ready(function(){
    $("#yy").click(function(){
        alert ($("#dubai").attr("href"));
    });
});

// Set Content
$(document).ready(function(){
    $("#bt1").click(function(){
        $("#test1").text("Hello");
    });
    $("#bt2").click(function(){
        $("#test2").html("<b>Kuzuzangpo!!!</b>");
    });
    $("#bt3").click(function(){
        $("#test3").val("Dawa Tamang");
    });
});

$(document).ready(function(){
    $("#bn1").click(function(){
      $(".se1").text(function(i, origText){
        return "Old text: " + origText + " New text: Kuzuzangpo la! (index: " + i + ")"; 
      });
    });
    $("#bn2").click(function(){
        $(".se2").html(function(i, origText){
            return "Old text: " + origText + " New html: <i>Kuzuzangpo la !!! (index:" + i + ")"
        });
    });
});

$(document).ready(function(){
    $("#btut").click(function(){
        $("#utub").attr("href", "https://www.youtube.com/watch?v=KW_Vu4qQXQU&list=RDKW_Vu4qQXQU&start_radio=1");
    });
});

$(document).ready(function(){
    $("#idd").click(function(){
        $("#sttt").attr({
            "href" : "https://www.youtube.com/watch?v=1ozmyl1ZEyY",
            "title" : " Sai Pallavi Dance"
        });
    });
});

$(document).ready(function(){
    $("button").click(function(){
      $("#w3s").attr({
        "href" : "https://www.w3schools.com/jquery/",
        "title" : "W3Schools jQuery Tutorial"
      });
    });
  });

  $(document).ready(function(){
    $("#lll").click(function(){
      $("#llll").attr("href", function(i, origValue){
        return origValue + "Puspha Song"; 
      });
    }); 
  });

//   Add Elements
$(document).ready(function(){
    $("#btn11").click(function(){
      $("#00").append(" <b>Appended text</b>.");
    });
  
    $("#btn22").click(function(){
      $("ol").append("<li>Appended item</li>");
    });
  });


  $(document).ready(function(){
    $("#btn111").click(function(){
      $("#00").prepend("<b>Prepended text</b>. ");
    });
    $("#btn222").click(function(){
      $("ol").prepend("<li>Prepended item</li>");
    });
  });

//   after() and before() Methods
$(document).ready(function(){
    $("#btn11111").click(function(){
      $("img").before("<b>Your big fan</b>");
    });
  
    $("#btn22222").click(function(){
      $("img").after("<i>Lots of love</i>");
    });
  });

//   remove()
$(document).ready(function(){
    $("#da").click(function(){
        $("#div1").remove();
    });
});

$(document).ready(function(){
    $("#dw").click(function(){
        $("#div1").empty();
    });
});

$(document).ready(function(){
    $("#rmb").click(function(){
        $(".tst").remove(".tst");
    });
});

$(document).ready(function(){
    $("#rmv").click(function(){
        $("h3").remove(".tst, .demo");
    });
});

// addClass()
$(document).ready(function(){
    $("#btb").click(function(){
      $("#h1, #h2, #p").addClass("blue");
      $("#div").addClass("important");
    });
  });

  $(document).ready(function(){
    $("#bttb").click(function(){
      $("#div").addClass("important green");
    });
  });

  $(document).ready(function(){
    $("#rv").click(function(){
      $("#h1, #h2, #p").removeClass("blue");
    });
  });

  $(document).ready(function(){
    $("#tgl").click(function(){
      $("#h1, #h2, #p").toggleClass("blue");
    });
  });

//   css() Method
$(document).ready(function(){
    $("#zz").click(function(){
      alert("Background color = " + $("h5").css("background-color"));
    });
  });

  $(document).ready(function(){
    $("#xy").click(function(){
      $("h5").css("background-color", "yellow");
    });
  });

  $(document).ready(function(){
    $("#xyz").click(function(){
      $("h5").css({"background-color": "blue", "font-size": "200%"});
    });
  });

//   Dimensions
$(document).ready(function(){
    $("#dime").click(function(){
      var txt = "";
      txt += "Width of div: " + $("#div11").width() + "</br>";
      txt += "Height of div: " + $("#div1").height() + "</br>";
      txt += "Inner width of div: " + $("#div11").innerWidth() + "</br>";
      txt += "Inner height of div: " + $("#div11").innerHeight()+ "</br>";
      txt += "Outer width of div: " + $("#div11").outerWidth() + "</br>";
      txt += "Outer height of div: " + $("#div11").outerHeight() + "</br>";
      txt += "Outer width of div (margin included): " + $("#div11").outerWidth(true) + "</br>";
      txt += "Outer height of div (margin included): " + $("#div11").outerHeight(true);
      $("#div11").html(txt);
    });
  });

  $(document).ready(function(){
    $("#dimd").click(function(){
      var txt = "";
      txt += "Document width/height: " + $(document).width();
      txt += "x" + $(document).height() + "\n";
      txt += "Window width/height: " + $(window).width();
      txt += "x" + $(window).height();
      alert(txt);
    });
  });

  $(document).ready(function(){
    $("#rset").click(function(){
      $("#div11").width(500).height(500);
    });
  });

  // Form
  $(document).ready(function () {
    $("#subtn").click(function () {
        alert("Your details has been successfully submitted" + $("legend").text());
    });
});
