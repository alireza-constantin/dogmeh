const options = document.querySelectorAll(".cat-menu__item")
const categoryList = document.getElementById("category-list")

const categories = {
    cloth: [
        "مانتو",
        "تونیک",
        "شومیز",
        "کت",
        "دامن",
        "تونیک",
        "سارافون",
        "شلوار",
        "شال",
        "پیراهن",
        "کت",
        "دامن",
        "پانچو",
        "سرهمی",
    ],
    bag: [
        "کیف دوشی",
        "کوله",
        "کیف دستی",
        "کیف لوازم آرایش",
        "جاکارتی",
        "کیف پول",
        "جاکارتی",
    ],
    accessory: [
        "گردنبند",
        "گوشواره",
        "دستبند",
        "پابند",
        "انگشتر",
        "جا کلیدی",
        "سنجاق سینه",
    ],
}

function populateCategoryList(categoryName) {
    categoryList.innerHTML = ""
    categories[categoryName].forEach((category) => {
        const list = document.createElement("li")
        list.textContent = category
        categoryList.appendChild(list)
    })
}

populateCategoryList("cloth")

const acc = new Proxy(
    {
        selected: null,
    },
    {
        set(target, p, newval) {
            const oldval = target[p]
            if (p === "selected") {
                if (oldval) {
                    oldval.classList.remove("selected")
                }
                if (newval) {
                    newval.classList.add("selected")
                }
            }
            target[p] = newval
            return true
        },
    }
)

for (let option of options) {
    option.addEventListener(
        "mouseover",
        () => {
            categoryList.innerHTML = ""
            const categoryName = option.getAttribute("data-name") || "cloth"
            acc.selected = option;
            populateCategoryList(categoryName)
        },
        { capture: true }
    )
}
