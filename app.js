const CATEGORIES = {
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

const catToFullNameMap = {
    cloth: "مد و پوشاک",
    bag: "کیف",
    accessory: "اکسسوری",
}

// -------------------------------- desktop category menu ---------------------------------------
const options = $(".cat-menu__item")
const categoryList = $("#category-list")

console.log(options)

const selectMenuOption = new Proxy(
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

function populateCategoryList(categoryName) {
    categoryList.empty()
    $.each(CATEGORIES[categoryName], function (_, category) {
        const listItem = $("<li>").text(category)
        categoryList.append(listItem)
    })
}

populateCategoryList("cloth")

options.on("mouseover", function () {
    categoryList.empty()
    const categoryName = $(this).data("name") || "cloth"
    console.log(this)
    selectMenuOption.selected = this
    populateCategoryList(categoryName)
})

// ---------------------------------------- tablet & mobile sidebar -------------------------------------------
const mbMenuOptions = $(".sidebar__menu-item#menu-item")
const mbCategoryList = $("#mb-category-list")

$(".sidebar-btn").on("click", function () {
    $("body").addClass("sidebar-open")
    $(".sidebar").addClass("open")
})

$("#sidebar-close-btn").on("click", function () {
    $("body").removeClass("sidebar-open")
    $(".sidebar").removeClass("open")
})

$(".layer").on("click", function () {
    $("body").removeClass("sidebar-open")
    $(".sidebar").removeClass("open")
})

// for (option of mbMenuOptions) {
mbMenuOptions.on("click", function () {
    console.log("hello")
    const categoryName = $(this).data("name") || "cloth"
    $("#mb-category-menu").addClass("hid")
    const backToMenuBtn = $("<div>").text("بازگشت").addClass("sidebar__cat-btn")
    const lists = $("<div>")
    mbCategoryList.append(lists)
    lists.append(backToMenuBtn)
    backToMenuBtn.on("click", function () {
        lists.empty()
        $("#mb-category-menu").removeClass("hid")
    })
    const listHeader = $("<div>")
        .text(catToFullNameMap[categoryName])
        .addClass("py-4 text-primary")
    lists.append(listHeader)
    $.each(CATEGORIES[categoryName], function (_, category) {
        const listItem = $("<li>").text(category).addClass("sidebar__cat-list")
        lists.append(listItem)
    })
})
const slideContainer = $(".slide-container")
$("#slide-right").on("click", function () {
    console.log(slideContainer[0]);

    slideContainer[0].scrollBy({
        left: 200,
        behavior: "smooth"
    })
})

$("#slide-left").on("click", function () {
    console.log(slideContainer[0])

    slideContainer[0].scrollBy({
        left: -200,
        behavior: "smooth",
    })
})

