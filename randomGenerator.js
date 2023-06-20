function randomSentenceGen() {

    // defining the arreys
    let names = [
        "Dimitar",
        "Georgi",
        "Ivan",
        "Stefan",
        "Petar",
        "Nikolay",
        "Ivelin",
        "Bozhidar",
        "Dimitrina",
        "Elena",
        "Violeta",
        "Liliana",
        "Martin",
        "Nikolai",
        "Atanaska",
        "Desislava",
        "Rumyana",
        "Stoyanka",
        "Vesela",
        "Zdravka",
        "Ani",
        "Radoslava",
        "Rositsa"
    ];

    let cities = [
        "Sofia",
        "Plovdiv",
        "Varna",
        "Burgas",
        "Ruse",
        "Stara Zagora",
        "Pleven",
        "Sliven",
        "Dobrich",
        "Shumen",
        "Pazardzhik",
        "Yambol",
        "Haskovo",
        "Blagoevgrad",
        "Veliko Tarnovo",
        "Gabrovo",
        "Vratsa",
        "Montana",
        "Vidin",
        "Kardzhali",
        "Kyustendil",
        "Lovech",
        "Pernik",
        "Silistra",
        "Targovishte"
    ];

    let jobs = [
        "Accountant",
        "Actor",
        "Architect",
        "Artist",
        "Attorney",
        "Chef",
        "Dentist",
        "Doctor",
        "Engineer",
        "Entrepreneur",
        "Graphic Designer",
        "Journalist",
        "Lawyer",
        "Musician",
        "Nurse",
        "Photographer",
        "Police Officer",
        "Programmer",
        "Scientist",
        "Teacher",
        "Writer"
      ];

      //creating a rondom sentence using the arreys
      let name = names[Math.floor(Math.random() * names.length)];
      let city = cities[Math.floor(Math.random() * cities.length)];
      let job = jobs[Math.floor(Math.random() * jobs.length)];
      document.getElementById('sentence').textContent = `${name} lives in ${city}, and works as a ${job}.`;
}