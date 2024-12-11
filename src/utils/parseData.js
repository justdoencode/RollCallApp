export default function(data){
    return Object.keys(data).map(key=>{
        return{
            id:key,
            ...data[key]
        }
    })
}






// function fetchData(){
        
//     database().ref(`students/Büyükler`).on("value", snapshot => {
//         console.log(snapshot.val())
//         if(snapshot.val()){
//             const parsedData = parseData(snapshot.val())
//             setSeniorStudent(parsedData)
//         }
//     })

//     database().ref(`students/Küçükler`).on("value", snapshot => {
//         console.log(snapshot.val())
//         if(snapshot.val()){
//             const parsedData = parseData(snapshot.val())
//             setJuniorStudent(parsedData)
//         }
//     })

//     setStudentList(...seniorStudents,...juniorStudents)

// }