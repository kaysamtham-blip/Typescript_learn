interface student {
  name: string;
  id: number;
  scores: number[];
  isEnrolled: boolean;
  title?: string;
}

const s1:student = {name:Wini, id:253, scores:[58,76,85], isEnrolled:true}
const s2:student = {name:alpha, id:432, scores:[73,83,75], isEnrolled:true}
const s3:student = {name:piggie, id:229, scores:[828,90,45], isEnrolled:false}

const average = (scores:number[]) => {
  return (scores[0], scores[1], scores[2])/3;
}

const calcgrade = (ave:number) => {                
let grade:string
if(ave >= 80) {
  grade = "A"
}
else if(ave >= 60) {
  grade = "B"
}
else if(ave >= 50) {
  grade = "C"
}
else {
  grade = "fail"

return grade
}

function report(detail:student): void {
const ave = average(detail.scores)
const grade = calcgrade(ave)
  console.log("Name: " + detail.name + " | ID: " + detail.id + " | Average: " + ave)
  if (grade==="C" || grade ==="fail") {
    console.warn("Study smart!")
  }
  if(isEnrolled===false) {
    console.error("This student miss the exam.")
  }
} 

report(s1);
report(s2);
report(s3);

function wrapArray <T>(cincai): T[] {
  console.log([cincai])
  return [cincai]
}

wrapArray("hahaha");
wrapArray(207);
wrapArray(false);

const findmax = (ave: result[]): string => {
  highest = 0
  for (let i = 0,i <=ave.length ,i=i++){
    if(result[0] > highest){
      student.name[i] = highest
      return highest
    }
  }
}

console.log("Top student is " + highest + ".")