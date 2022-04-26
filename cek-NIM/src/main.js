function jenjangPendidikan() {
    let nimMahasiswa = document.getElementById("NIM");
    let nimValue = nimMahasiswa.value;
    const nim = nimValue.split("");
    let kodeJenjang = nim[0];
    let result = "";
    if (kodeJenjang == "0") {
        result = "program Diploma Tiga (D3)";
    } else if (kodeJenjang == "1") {
        result = "S1(Sarjana)";
    } else if (kodeJenjang == "2") {
        result = "S2(megister)";
    } else if (kodeJenjang == "3") {
        result = "S3(Doktoral)";
    } else {
        result = "none";
    }

    return result;

}

function angkatan() {
    let nimMahasiswa = document.getElementById("NIM");
    let nimValue = nimMahasiswa.value;
    const nim = nimValue.split("");
    let kodeTahun1 = nim[1];
    let kodeTahun2 = nim[2];
    let akt = '20' + kodeTahun1 + kodeTahun2;
    return akt;

}

function fakultas() {
    let nimMahasiswa = document.getElementById("NIM");
    let nimValue = nimMahasiswa.value;
    const nim = nimValue.split("");
    let kodeFakultas = nim[3];
    let result = "";

    if (kodeFakultas == '1') {
        result = "Tarbiyah dan Kegururan";
    } else if (kodeFakultas == '2') {
        result = "Syari\'ah dan Hukum";
    } else if (kodeFakultas == '3') {
        result = "Ushuluddin";
    } else if (kodeFakultas == '4') {
        result = "Dakwah dan Komunikasi";
    } else if (kodeFakultas == '5') {
        result = "Sains dan Teknologi";
    } else if (kodeFakultas == '6') {
        result = "Psikologi";
    } else if (kodeFakultas == '7') {
        result = "Ekonomi dan Ilmu Sosial";
    } else if (kodeFakultas == '8') {
        result = "Pertanian dan Peternakan";
    } else {
        result = "none"
    }
    return result;
}

function jurusan() {
    let nimMahasiswa = document.getElementById("NIM");
    let nimValue = nimMahasiswa.value;
    const nim = nimValue.split("");
    let kodeProdi1 = nim[4];
    let kodeProdi2 = nim[5];
    let kodeProdi = "" + kodeProdi1 + kodeProdi2
    let result = "";

    if (fakultas() == "Tarbiyah dan Kegururan") {
        if (kodeProdi == "01") {
            return "Hukum Keluarga (Ahwal Al-Syakhsiyah)";
        } else if (kodeProdi == "02") {
            result = "Pendidikan Bahasa Arab";
        } else if (kodeProdi == "03") {
            result = "Manajemen Pendidikan Islam";
        } else if (kodeProdi == "04") {
            result = "Pendidikan Bahasa Inggris";
        } else if (kodeProdi == "05") {
            result = "Pendidikan Matematika";
        } else if (kodeProdi == "06") {
            result = "Pendidikan Ekonomi";
        } else if (kodeProdi == "07") {
            result = "Pendidikan Kimia";
        } else if (kodeProdi == "08") {
            result = "Pendidikan Guru Madrasah Ibtidaiyah";
        } else if (kodeProdi == "09") {
            result = "Pendidikan Guru Raudhatul Athfal";
        } else {
            result = "none";
        }

        //Syariah dan hukum
    } else if (fakultas() == "Syari\'ah dan Hukum") {
        if (kodeProdi == "01") {
            result = "Hukum Keluarga (Ahwal Al-Syakhsiyah)";
        } else if (kodeProdi == "02") {
            result = "Hukum Ekonomi Syariah (Muamalah)";
        } else if (kodeProdi == "03") {
            result = "Perbandingan Mazhab dan Hukum";
        } else if (kodeProdi == "04") {
            result = "Hukum Tata Negara(Siyasah)";
        } else if (kodeProdi == "05") {
            result = "Ekonomi Islam";
        } else if (kodeProdi == "06") {
            result = "Perbankan Syari\'ah";
        } else if (kodeProdi == "07") {
            result = "Ilmu Hukum";
        } else {
            result = "none";
        }

        // Ushuluddin
    } else if (fakultas() == "Ushuluddin") {
        if (kodeProdi == "01") {
            result = "Ilmu Aqidah";
        } else if (kodeProdi == "02") {
            result = "Ilmu Al-qur\'an dan Tafsir";
        } else if (kodeProdi == "03") {
            result = "Perbandingan Agama";
        } else {
            result = "none";
        }

        //Dakwah dan Ilmu Komunikasi
    } else if (fakultas() == "Dakwah dan Komunikasi") {
        if (kodeProdi == "01") {
            result = "Pengembangan Masyarakat Islam";
        } else if (kodeProdi == "02") {
            result = "Bimbingan Penyuluhan Islam";
        } else if (kodeProdi == "03") {
            result = "Ilmu Komunikasi";
        } else if (kodeProdi == "04") {
            result = "Manajemen Dakwah";
        } else {
            result = "none";
        }
        //                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              DIBUAT PADA : 09/14/2022 - IBNU SAHID

        //Sains dan Teknologi
    } else if (fakultas() == "Sains dan Teknologi") {
        if (kodeProdi == "01") {
            result = "Teknik Informatika";
        } else if (kodeProdi == "02") {
            result = "Teknik Industri";
        } else if (kodeProdi == "03") {
            result = "Sistem Informasi";
        } else if (kodeProdi == "04") {
            result = "Matematika";
        } else if (kodeProdi == "05") {
            result = "Teknik Elektro";
        } else {
            result = "none";
        }
    } else if (fakultas() == "Psikologi") {
        if (kodeProdi == "01") {
            result = "Psikologi";
        } else {
            result = "none";
        }
    } else if (fakultas() == "Ekonomi dan Ilmu Sosial") {
        if (kodeProdi == "01") {
            result = "Manajemen";
        } else if (kodeProdi == "02") {
            result = "Manajemen Perusahaan";
        } else if (kodeProdi == "03") {
            result = "Akuntansi";
        } else if (kodeProdi == "04") {
            result = "Akuntansi D3";
        } else if (kodeProdi == "05") {
            result = "Ilmu Administrasi Negara";
        } else if (kodeProdi == "06") {
            result = "Administrasi Perpajakan";
        } else {
            result = "none";
        }
    } else if (fakultas() == "Pertanian dan Peternakan") {
        if (kodeProdi == "01") {
            result = "Peternakan";
        } else if (kodeProdi == "02") {
            result = "Agroteknologi";
        } else {
            result = "none"
        }
    } else {
        result = "none"
    }

    return result;
}

//gender
function gender() {
    let nimMahasiswa = document.getElementById("NIM");
    let nimValue = nimMahasiswa.value;
    const nim = nimValue.split("");
    let kodeGender = nim[6];
    let result = "";

    if (kodeGender == "1") {
        result = "Laki-Laki";
    } else if (kodeGender == "2") {
        result = "Perempuan";
    } else {
        result = "none"
    }
    return result;

}
//nomor mahasiswa
function nomorMhs() {
    let nimMahasiswa = document.getElementById("NIM");
    let nimValue = nimMahasiswa.value;
    const nim = nimValue.split("");
    let noMhs1 = nim[7];
    let noMhs2 = nim[8];
    let noMhs3 = nim[9];
    let noMhs4 = nim[10];

    let nomorMahasiswa = "" + noMhs1 + noMhs2 + noMhs3 + noMhs4;
    return nomorMahasiswa;
}

//cek format sudah benar atau tidak
function cekFormat() {
    let isTrue = true;
    if (jenjangPendidikan() == "none" || fakultas() == "none" || jurusan() == "none" || gender() == "none") {
        isTrue = false;
    }
    return isTrue;

}


function cek() {
    let nimMahasiswa = document.getElementById("NIM");
    let nimValue = nimMahasiswa.value;

    if (nimValue === "") {
        alert("Masukan NIM kamu terlebih dahulu");
        document.getElementById("btncek").href = "#";
    } else if (nimValue.length != 11) {
        alert("NIM yang kamu masukan salah");
        document.getElementById("btncek").href = "#";
    } else if (cekFormat() == false) {
        alert("NIM yang kamu masukan tidak ditemukan");
        document.getElementById("btncek").href = "#";
    } else {
        //output
        document.getElementById("btncek").href = "#output";
        document.getElementById("invis").classList.replace("invisible", "visible");
        document.getElementById("displayJP").innerHTML = ": " + jenjangPendidikan();
        document.getElementById("displayAKT").innerHTML = ": " + angkatan();
        document.getElementById("displayFakultas").innerHTML = ": " + fakultas();
        document.getElementById("displayJurusan").innerHTML = ": " + jurusan();
        document.getElementById("displayGender").innerHTML = ": " + gender();
        document.getElementById("displayNmrMahasiswa").innerHTML = ": " + nomorMhs();
    }
}

function back() {
    document.getElementById("NIM").value = "";
    document.getElementById("btncek").href = "#output";
    document.getElementById("invis").classList.replace("visible", "invisible");
    document.getElementById("displayJP").innerHTML = "";
    document.getElementById("displayAKT").innerHTML = "";
    document.getElementById("displayFakultas").innerHTML = "";
    document.getElementById("displayJurusan").innerHTML = "";
    document.getElementById("displayGender").innerHTML = "";
    document.getElementById("displayNmrMahasiswa").innerHTML = "";

}