$(document).ready(function()
{
  // Target left images first
    
    
  // Target the image
  $("#fbli1").hover(function()  
 {
    
    // Make .featurebox1 into .featurebox1.hovered
    $("#fb1").addClass("hovered");
 },
// Remove the new stuff because we aren't hovering anymore            
function()
{
      $("#fb1").removeClass("hovered");
});
                    
  // Second left image
                    
  // Target the image
  $("#fbli2").hover(function()
 {
    
    // Make .featurebox1 into .featurebox1.hovered
    $("#fb3").addClass("hovered");
 },
// Remove the new stuff because we aren't hovering anymore            
function()
{
      $("#fb3").removeClass("hovered");
});
                    
  // Final left image located, over and out
                 
  // Target the image
  $("#fbli3").hover(function()
 {
    
    // Make .featurebox1 into .featurebox1.hovered
    $("#fb5").addClass("hovered");
 },
// Remove the new stuff because we aren't hovering anymore            
function()
{
      $("#fb5").removeClass("hovered");
});
    
// We're just getting started, 2 right images coming right up
    
  // Target the image
  $("#fbri1").hover(function()
 {
    
    // Make .featurebox2 into .featurebox2.hovered
    $("#fb2").addClass("hovered");
 },
// Remove the new stuff because we aren't hovering anymore            
function()
{
      $("#fb2").removeClass("hovered");
});
    
    
// Alright, I can only take one more of these

  // Target the image
  $("#fbri2").hover(function()
 {
    
    // Make .featurebox2 into .featurebox2.hovered
    $("#fb4").addClass("hovered");
 },
// Remove the new stuff because we aren't hovering anymore            
function()
{
      $("#fb4").removeClass("hovered");
});
    
});