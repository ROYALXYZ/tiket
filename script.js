

alert ("Selamat Datang Di Ticket \n Berapa Umur Anda ? Minimal 13 Ya") ;

const umur = prompt("Masukan Umur Anda")

if (umur >= 13) {
    alert("Anda Sudah Cukup Umur")
    const studio = prompt("Silahkan Masukan Studio Kesayangan Anda (CAPITAL): \n A : Studio A \n B : Studio B \n C : Studio C ")
  
    if (studio == "A" || studio == "B" || studio == "C" )  {

        const film = prompt ("Pilih Film \n 1 :Ancika\n 2 :Tom & Jerry \n 3 :Bagus Enkripsi")
    
 
         //    Mutable
        let namaFilm
        if (film == "1") {
       namaFilm = "Ancika"
        } else if (film == "2") { 
       namaFilm = "Tom & Jerry"
       } else if (film == "3" )
       namaFilm = "Bagus Enkripsi"
        //    Mutable

            if (film == "1" || film == "2" || film == "3") {
                
                const nama = prompt ("Masukan Nama Anda") ;
           
                alert(`Berikut Tiket Anda Nama : ${nama} \nUmur : ${umur} \nStudio : ${studio}\nNama Film : ${namaFilm}`)

            } else {
                alert ("Maaf Film Tidak Ada Di Dalam List")
            }
     } else {
    alert ("Anda Harus Mengisi Studio !!")
}
} else {    
    alert("Maaf G Cukup")
    
}