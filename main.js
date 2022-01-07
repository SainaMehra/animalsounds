//https://teachablemachine.withgoogle.com/models/EuPbiB5Sx/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EuPbiB5Sx/model.json",modelReady);
}
function modelReady()
{
    console.log("model is ready")
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
    }
}