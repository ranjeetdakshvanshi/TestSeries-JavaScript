const elements = [
    ["H", 1, "reactive", 1, 1], ["He", 2, "noble", 18, 1],
    ["Li", 3, "alkali", 1, 2], ["Be", 4, "alkaline", 2, 2],
    ["B", 5, "metalloids", 13, 2], ["C", 6, "reactive", 14, 2], ["N", 7, "reactive", 15, 2], ["O", 8, "reactive", 16, 2], ["F", 9, "reactive", 17, 2], ["Ne", 10, "noble", 18, 2],
    ["Na", 11, "alkali", 1, 3], ["Mg", 12, "alkaline", 2, 3],
    ["Al", 13, "metalloids", 13, 3], ["Si", 14, "metalloids", 14, 3], ["P", 15, "reactive", 15, 3], ["S", 16, "reactive", 16, 3], ["Cl", 17, "reactive", 17, 3], ["Ar", 18, "noble", 18, 3],
    ["K", 19, "alkali", 1, 4], ["Ca", 20, "alkaline", 2, 4], ["Sc", 21, "transition", 3, 4], ["Ti", 22, "transition", 4, 4], ["V", 23, "transition", 5, 4], ["Cr", 24, "transition", 6, 4],
    ["Mn", 25, "transition", 7, 4], ["Fe", 26, "transition", 8, 4], ["Co", 27, "transition", 9, 4], ["Ni", 28, "transition", 10, 4], ["Cu", 29, "transition", 11, 4], ["Zn", 30, "transition", 12, 4],
    ["Ga", 31, "metalloids", 13, 4], ["Ge", 32, "metalloids", 14, 4], ["As", 33, "metalloids", 15, 4], ["Se", 34, "reactive", 16, 4], ["Br", 35, "reactive", 17, 4], ["Kr", 36, "noble", 18, 4],
    ["Rb", 37, "alkali", 1, 5], ["Sr", 38, "alkaline", 2, 5], ["Y", 39, "transition", 3, 5], ["Zr", 40, "transition", 4, 5], ["Nb", 41, "transition", 5, 5], ["Mo", 42, "transition", 6, 5],
    ["Tc", 43, "transition", 7, 5], ["Ru", 44, "transition", 8, 5], ["Rh", 45, "transition", 9, 5], ["Pd", 46, "transition", 10, 5], ["Ag", 47, "transition", 11, 5], ["Cd", 48, "transition", 12, 5],
    ["In", 49, "metalloids", 13, 5], ["Sn", 50, "metalloids", 14, 5], ["Sb", 51, "metalloids", 15, 5], ["Te", 52, "metalloids", 16, 5], ["I", 53, "reactive", 17, 5], ["Xe", 54, "noble", 18, 5],
    ["Cs", 55, "alkali", 1, 6], ["Ba", 56, "alkaline", 2, 6],
    ["La", 57, "lanthanides", 3, 6], ["Ce", 58, "lanthanides", 4, 6], ["Pr", 59, "lanthanides", 5, 6], ["Nd", 60, "lanthanides", 6, 6], ["Pm", 61, "lanthanides", 7, 6],
    ["Sm", 62, "lanthanides", 8, 6], ["Eu", 63, "lanthanides", 9, 6], ["Gd", 64, "lanthanides", 10, 6], ["Tb", 65, "lanthanides", 11, 6], ["Dy", 66, "lanthanides", 12, 6],
    ["Ho", 67, "lanthanides", 13, 6], ["Er", 68, "lanthanides", 14, 6], ["Tm", 69, "lanthanides", 15, 6], ["Yb", 70, "lanthanides", 16, 6], ["Lu", 71, "lanthanides", 17, 6],
    ["Hf", 72, "transition", 4, 6], ["Ta", 73, "transition", 5, 6], ["W", 74, "transition", 6, 6], ["Re", 75, "transition", 7, 6], ["Os", 76, "transition", 8, 6],
    ["Ir", 77, "transition", 9, 6], ["Pt", 78, "transition", 10, 6], ["Au", 79, "transition", 11, 6], ["Hg", 80, "transition", 12, 6], ["Tl", 81, "metalloids", 13, 6],
    ["Pb", 82, "metalloids", 14, 6], ["Bi", 83, "metalloids", 15, 6], ["Po", 84, "metalloids", 16, 6], ["At", 85, "reactive", 17, 6], ["Rn", 86, "noble", 18, 6],
    ["Fr", 87, "alkali", 1, 7], ["Ra", 88, "alkaline", 2, 7],
    ["Ac", 89, "actinides", 3, 7], ["Th", 90, "actinides", 4, 7], ["Pa", 91, "actinides", 5, 7], ["U", 92, "actinides", 6, 7], ["Np", 93, "actinides", 7, 7],
    ["Pu", 94, "actinides", 8, 7], ["Am", 95, "actinides", 9, 7], ["Cm", 96, "actinides", 10, 7], ["Bk", 97, "actinides", 11, 7], ["Cf", 98, "actinides", 12, 7],
    ["Es", 99, "actinides", 13, 7], ["Fm", 100, "actinides", 14, 7], ["Md", 101, "actinides", 15, 7], ["No", 102, "actinides", 16, 7], ["Lr", 103, "actinides", 17, 7]
];

            let getInfo;
            const table = document.getElementById("periodicTable");
        elements.forEach(([symbol, number, category, col, row]) => {
            const elementDiv = document.createElement("div");
            elementDiv.classList.add("element", category);
            elementDiv.innerHTML = `<span>${number}</span> ${symbol}`;
            elementDiv.style.gridColumnStart = col;
            elementDiv.style.gridRowStart = row;
            elementDiv.setAttribute()
            table.appendChild(elementDiv);
            
        });
        getInfo=(e)=>{
            alert(e.target.innerText)
        }
        periodicTable.addEventListener("click",getInfo);
