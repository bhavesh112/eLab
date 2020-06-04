
var numberOfSubjects= $(".biotechLabs").length;
for (var i=0;i< numberOfSubjects;++i)
{
    $($(".biotechLabs")[i]).on("click", function () {
         var subject = this;
         sourceAssign(subject);
        });


}

function sourceAssign(subject)
{
    if($(subject).hasClass("lab0"))
    {
        $(".frameExperiment").attr("src","../biochemistry.html");
        console.log($(".frameExperiment").prop("src"));
    }
    else if($(subject).hasClass("lab1"))
    {
        $(".frameExperiment").attr("src","../CMB.html");
    }
}