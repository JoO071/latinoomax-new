/* =========================================================
   main.js - كل الجافاسكريبت في ملف واحد
   1) بيانات المنيو  2) سلة الطلبات  3) صفحة المنتج
   ========================================================= */

/* ---------- 1) بيانات المنيو (عدّل الأسماء والأسعار والصور من هنا) ---------- */
/* بيانات المنيو - عدّل الأسماء والأسعار والصور من هنا */
window.ZMENU = {
  pizza: [
    {
      id: "pizza-1",
      name: "بيتزا تشيكن باربيكيو",
      desc: "قطع دجاج فريش + صوص باربيكيو مدخن ممتاز + موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-2",
      name: "بيتزا تشيكن بيكون",
      desc: "دجاج + بيف بيكون مدخن وموتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-3",
      name: "بيتزا بيف بيكون",
      desc: "شرائح بيف بيكون مدخن غنية وموتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-4",
      name: "بيتزا تشيكن تكساس",
      desc: "قطع دجاج + صوص تكساس الغني بالبهارات + موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-5",
      name: "بيتزا تشيكن رانش",
      desc: "قطع دجاج + صوص رانش أمريكي كريمي غني + موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-6",
      name: "بيتزا تشيكن هالبينو",
      desc: "دجاج + شرائح هالبينو حارة وصوص حار",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-7",
      name: "بيتزا فاهيتا",
      desc: "فاهيتا دجاج مع البصل والفلفل المكرمل + موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-8",
      name: "بيتزا ديب رالش",
      desc: "دجاج + صوص رانش مضاعف غني كريمي + جبنة موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-9",
      name: "بيتزا كراشي رومي مدخن",
      desc: "قطع دجاج كراشي مقرمش + رومي مدخن فاخر + موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-10",
      name: "بيتزا سوسيس",
      desc: "سوسيس عالي الجودة + فلفل وزيتون وموتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-11",
      name: "بيتزا صدور جريل",
      desc: "صدور دجاج متبلة مشوية على الجريل + فلفل + موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-12",
      name: "بيتزا فور سيزون",
      desc: "أربعة أرباع متنوعة لحوم، دجاج، أجبان، خضار",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-13",
      name: "بيتزا متر كاملة",
      desc: "بيتزا بطول متر كامل تجمع حتى 4 أصناف من اختيارك الفاخر",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "متر كاملة",
          price: 550,
        },
      ],
    },
    {
      id: "pizza-14",
      name: "بيتزا مارجريتا",
      desc: "صوص طماطم + جبنة موتزاريلا فاخرة",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 80,
        },
        {
          label: "وسط (M)",
          price: 140,
        },
        {
          label: "كبير (L)",
          price: 170,
        },
        {
          label: "إكس لارج (XL)",
          price: 200,
        },
      ],
    },
    {
      id: "pizza-15",
      name: "بيتزا خضروات جوليان",
      desc: "فلفل ألوان + طماطم + مشروم + زيتون + صوص طماطم وموتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 80,
        },
        {
          label: "وسط (M)",
          price: 140,
        },
        {
          label: "كبير (L)",
          price: 170,
        },
        {
          label: "إكس لارج (XL)",
          price: 200,
        },
      ],
    },
    {
      id: "pizza-16",
      name: "بيتزا مكس جبن",
      desc: "مكس أجبان فاخرة + موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-17",
      name: "بيتزا مفروم",
      desc: "لحم مفروم متبل + بصل + فلفل + موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
    {
      id: "pizza-18",
      name: "بيتزا فراخ مكسيكي",
      desc: "دجاج مكسيكي حار + ذرة + موتزاريلا",
      img: "https://placehold.co/1200x700/1a1a1a/ffd000?text=Latinoo+Max+Pizza",
      sizes: [
        {
          label: "سلايس (قطعة)",
          price: 100,
        },
        {
          label: "وسط (M)",
          price: 160,
        },
        {
          label: "كبير (L)",
          price: 190,
        },
        {
          label: "إكس لارج (XL)",
          price: 220,
        },
      ],
    },
  ],
};

/* ---------- 2) سلة الطلبات (بتشتغل في أي صفحة) ---------- */
try {
  /* سلة الطلبات - شغالة في أي صفحة تحمّل menu-data.js و cart.js */
  (function () {
    "use strict";

    var BRANCHES = [
      { id: "faqous", name: "فرع فاقوس - كفر العدوي", phone: "01002552421" },
    ];
    var KEY = "latinoo_max_cart_v1";
    /* رقم الواتساب اللي بيستقبل الأوردرات (للتجربة).
     لما تخلص تجربة: خليه '' وكل طلب هيروح على رقم الفرع المختار */
    var ORDER_PHONE = "01040580225";
    var SITE_URL = "https://www.latinoomax.com/";

    function ic(p) {
      return '<svg class="icon" viewBox="0 0 24 24">' + p + "</svg>";
    }
    var I = {
      cart: ic(
        '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.6 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L21 8H6"/>',
      ),
      trash: ic(
        '<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"/>',
      ),
      close: ic('<path d="M6 6l12 12M18 6L6 18"/>'),
      store: ic(
        '<path d="M3 9l1.5-5h15L21 9M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M5 12v8h14v-8M10 20v-5h4v5"/>',
      ),
      bike: ic(
        '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l4-8h5l3 8M10 9L8 6H6M14 9l-2 8"/>',
      ),
      user: ic(
        '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
      ),
      phone: ic(
        '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
      ),
      pin: ic(
        '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
      ),
      checkc: ic('<circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>'),
      send: ic('<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>'),
    };

    var state = {
      items: load(),
      branch: "faqous",
      type: "delivery",
      form: { name: "", phone: "", address: "" },
      errors: {},
    };

    function load() {
      try {
        return JSON.parse(localStorage.getItem(KEY)) || [];
      } catch (e) {
        return [];
      }
    }
    function save() {
      try {
        localStorage.setItem(KEY, JSON.stringify(state.items));
      } catch (e) {}
    }
    function esc(s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        }[c];
      });
    }
    function count() {
      return state.items.reduce(function (n, i) {
        return n + i.qty;
      }, 0);
    }
    function total() {
      return state.items.reduce(function (n, i) {
        return n + i.qty * i.price;
      }, 0);
    }
    function branch() {
      return BRANCHES.filter(function (b) {
        return b.id === state.branch;
      })[0];
    }
    function digits(s) {
      return String(s)
        .replace(/[٠-٩]/g, function (d) {
          return "٠١٢٣٤٥٦٧٨٩".indexOf(d);
        })
        .replace(/\s/g, "");
    }

    /* ---------- DOM ---------- */
    var fab, overlay, drawer, toastEl, toastTimer;

    function build() {
      fab = document.createElement("button");
      fab.className = "zc-fab";
      fab.type = "button";
      fab.setAttribute("aria-label", "سلة الطلبات");
      fab.addEventListener("click", open);
      overlay = document.createElement("div");
      overlay.className = "zc-overlay";
      overlay.addEventListener("click", close);
      drawer = document.createElement("aside");
      drawer.className = "zc-drawer";
      drawer.setAttribute("aria-label", "سلة الطلبات");
      toastEl = document.createElement("div");
      toastEl.className = "zc-toast";
      toastEl.setAttribute("role", "status");
      document.body.appendChild(fab);
      document.body.appendChild(overlay);
      document.body.appendChild(drawer);
      document.body.appendChild(toastEl);

      drawer.addEventListener("click", onDrawerClick);
      drawer.addEventListener("input", function (e) {
        var f = e.target.getAttribute("data-field");
        if (!f) return;
        state.form[f] = e.target.value;
        if (state.errors[f]) {
          delete state.errors[f];
          var er = drawer.querySelector('[data-err="' + f + '"]');
          if (er) er.hidden = true;
        }
      });
      toastEl.addEventListener("click", function (e) {
        if (e.target.closest("[data-toast-close]"))
          toastEl.classList.remove("show");
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
      });
      document.addEventListener("click", function (e) {
        var b = e.target.closest("[data-add]");
        if (!b) return;
        var p = findProduct(b.getAttribute("data-add"));
        if (!p) return;
        add(
          {
            id: p.id,
            name: p.name,
            size: p.sizes[0].label,
            price: p.sizes[0].price,
            img: p.img,
          },
          1,
        );
      });
      render();
    }

    function findProduct(id) {
      var found = null;
      Object.keys(window.ZMENU || {}).forEach(function (c) {
        window.ZMENU[c].forEach(function (p) {
          if (p.id === id) found = p;
        });
      });
      return found;
    }

    function field(name, label, icon, type, ph, extra) {
      var tag =
        name === "address"
          ? '<textarea data-field="address" rows="3" placeholder="' +
            ph +
            '">' +
            esc(state.form.address) +
            "</textarea>"
          : '<input data-field="' +
            name +
            '" type="' +
            type +
            '" placeholder="' +
            ph +
            '" value="' +
            esc(state.form[name]) +
            '" ' +
            (extra || "") +
            " />";
      var msg = {
        name: "يرجى كتابة الاسم",
        phone: "يرجى كتابة رقم جوال صحيح للتواصل (11 رقم)",
        address: "يرجى كتابة عنوان التوصيل بالتفصيل",
      }[name];
      return (
        '<label class="zc-label">' +
        label +
        ' <i>*</i></label><div class="zc-field' +
        (name === "address" ? " zc-field-area" : "") +
        (state.errors[name] ? " bad" : "") +
        '">' +
        tag +
        icon +
        "</div>" +
        '<div class="zc-err" data-err="' +
        name +
        '"' +
        (state.errors[name] ? "" : " hidden") +
        ">" +
        msg +
        "</div>"
      );
    }

    function render() {
      var n = count();
      fab.innerHTML =
        I.cart + (n ? '<span class="zc-badge">' + n + "</span>" : "");
      var head =
        '<div class="zc-head"><button type="button" class="zc-close" data-act="close" aria-label="إغلاق">' +
        I.close +
        "</button>" +
        '<div class="zc-head-text"><h2>سلة الطلبات</h2><small>' +
        (n === 1 ? "1 صنف مختار" : n + " أصناف مختارة") +
        "</small></div>" +
        (n
          ? '<button type="button" class="zc-clear" data-act="clear">' +
            I.trash +
            " تفريغ</button>"
          : "") +
        "</div>";

      if (!n) {
        drawer.innerHTML =
          head +
          '<div class="zc-empty"><span class="zc-empty-icon">' +
          I.store +
          "</span><h3>سلتك فارغة حالياً</h3>" +
          '<p>لم تقم بإضافة أي وجبة بعد. تصفح أقسام مطعم لاتينو ماكس واختر وجبتك المفضلة.</p><a class="btn-yellow" href="index.html">تصفح المنيو الآن</a></div>';
        return;
      }

      var items = state.items
        .map(function (it) {
          return (
            '<div class="zc-item"><img src="' +
            esc(it.img) +
            '" alt="" /><div class="zc-item-info"><h4>' +
            esc(it.name) +
            "</h4>" +
            '<span class="zc-size">' +
            esc(it.size) +
            '</span><div class="zc-item-foot"><span class="zc-item-price"><b>' +
            it.price * it.qty +
            "</b> ج.م</span>" +
            '<div class="zc-qty"><button type="button" data-act="inc" data-key="' +
            esc(it.key) +
            '" aria-label="زيادة">+</button><span>' +
            it.qty +
            "</span>" +
            '<button type="button" data-act="dec" data-key="' +
            esc(it.key) +
            '" aria-label="نقص">−</button></div></div></div></div>'
          );
        })
        .join("");

      var branches = BRANCHES.map(function (b) {
        return (
          '<button type="button" class="zc-branch' +
          (b.id === state.branch ? " active" : "") +
          '" data-act="branch" data-id="' +
          b.id +
          '"><span class="zc-radio"></span>' +
          b.name +
          "</button>"
        );
      }).join("");

      var delivery = state.type === "delivery";
      drawer.innerHTML =
        head +
        '<div class="zc-body">' +
        '<h3 class="zc-sec">الوجبات المختارة</h3><div class="zc-items">' +
        items +
        "</div>" +
        '<h3 class="zc-sec">' +
        I.pin +
        ' اختر الفرع</h3><div class="zc-branches">' +
        branches +
        "</div>" +
        '<h3 class="zc-sec">نوع الطلب</h3><div class="zc-types">' +
        '<button type="button" class="zc-type' +
        (delivery ? " active" : "") +
        '" data-act="type" data-t="delivery">' +
        I.bike +
        " توصيل دليفري</button>" +
        '<button type="button" class="zc-type' +
        (!delivery ? " active" : "") +
        '" data-act="type" data-t="hall">' +
        I.store +
        " صالة</button></div>" +
        '<h3 class="zc-sec">بيانات التواصل</h3>' +
        field(
          "name",
          "الاسم بالكامل",
          I.user,
          "text",
          "اكتب اسمك هنا",
          'autocomplete="name"',
        ) +
        field(
          "phone",
          "رقم الجوال للتواصل",
          I.phone,
          "tel",
          "010XXXXXXXX",
          'inputmode="numeric" maxlength="11" autocomplete="tel"',
        ) +
        (delivery
          ? field(
              "address",
              "عنوان التوصيل بالتفصيل",
              I.pin,
              "text",
              "المنطقة، الشارع، العمارة، رقم الشقة",
            )
          : "") +
        '<div class="zc-total"><span>الإجمالي</span><span class="zc-total-num"><b>' +
        total() +
        "</b> جنيه مصري</span></div>" +
        '<button type="button" class="zc-send" data-act="send">' +
        I.send +
        " إرسال الطلب عبر واتساب</button>" +
        '<p class="zc-note">' +
        (ORDER_PHONE
          ? "سيتم فتح واتساب لإرسال طلبك للمطعم"
          : "سيتم فتح محادثة مباشرة مع واتساب " + esc(branch().name)) +
        "</p></div>";
    }

    /* ---------- actions ---------- */
    function onDrawerClick(e) {
      var b = e.target.closest("[data-act]");
      if (!b) return;
      var act = b.getAttribute("data-act"),
        key = b.getAttribute("data-key");
      if (act === "close") return close();
      if (act === "clear") {
        state.items = [];
        save();
      }
      if (act === "inc" || act === "dec") {
        state.items.forEach(function (it) {
          if (it.key === key) it.qty += act === "inc" ? 1 : -1;
        });
        state.items = state.items.filter(function (it) {
          return it.qty > 0;
        });
        save();
      }
      if (act === "branch") state.branch = b.getAttribute("data-id");
      if (act === "type") state.type = b.getAttribute("data-t");
      if (act === "send") return send();
      render();
    }

    function send() {
      var f = state.form,
        err = {};
      f.phone = digits(f.phone);
      if (!f.name.trim()) err.name = 1;
      if (!/^01[0-9]{9}$/.test(f.phone)) err.phone = 1;
      if (state.type === "delivery" && !f.address.trim()) err.address = 1;
      state.errors = err;
      if (Object.keys(err).length) {
        render();
        var first = drawer.querySelector(".zc-field.bad");
        if (first)
          first.scrollIntoView({ block: "center", behavior: "smooth" });
        return;
      }
      var b = branch();
      var LINE = "━━━━━━━━━━━━━━━━━━━━━";
      var delivery = state.type === "delivery";
      var lines = state.items.map(function (it, i) {
        return (
          i +
          1 +
          ". *" +
          it.name +
          "*\n" +
          "   📏 *الحجم:* " +
          it.size +
          "\n" +
          "   🔢 *الكمية:* " +
          it.qty +
          " × " +
          it.price +
          " ج.م = *" +
          it.price * it.qty +
          " ج.م*"
        );
      });
      var msg = [
        "*طلب جديد من موقع مطعم لاتينو ماكس* 🍔🔥",
        LINE,
        "📍 *الفرع المختار:* " + b.name,
        "👤 *اسم العميل:* " + f.name.trim(),
        "📞 *رقم الجوال:* " + f.phone,
        "🛵 *نوع الطلب:* " +
          (delivery ? "توصيل للمنزل (Delivery)" : "صالة (Dine-in)"),
      ]
        .concat(
          delivery ? ["🏠 *العنوان بالتفصيل:* " + f.address.trim()] : [],
          [
            LINE,
            "🍽️ *تفاصيل الوجبات والطلبات:*",
            lines.join("\n\n"),
            LINE,
            "💰 *الإجمالي النهائي:* *" + total() + " جنيه مصري*",
            LINE,
            "شكراً لاختيارك مطعم لاتينو ماكس! 🙏🔥",
            LINE,
            "🌐 *رابط الموقع لتصفح المنيو والطلب من جديد:* " + SITE_URL,
          ],
        )
        .join("\n");
      var target = ORDER_PHONE || b.phone;
      window.open(
        "https://wa.me/2" + target + "?text=" + encodeURIComponent(msg),
        "_blank",
      );

      // الطلب اتبعت: فضّي السلة (0 أوردرات) وقفل الدرج
      state.items = [];
      state.errors = {};
      save();
      render();
      close();
      toast("تم تجهيز طلبك وفتح واتساب لإرساله للمطعم ✅");
    }

    function add(item, qty) {
      qty = qty || 1;
      var key = item.id + "|" + item.size,
        hit = null;
      state.items.forEach(function (it) {
        if (it.key === key) hit = it;
      });
      if (hit) hit.qty += qty;
      else
        state.items.push({
          key: key,
          id: item.id,
          name: item.name,
          size: item.size,
          price: item.price,
          img: item.img,
          qty: qty,
        });
      save();
      render();
      toast("تمت إضافة " + item.name + " إلى السلة! 🔥");
    }

    function toast(msg) {
      toastEl.innerHTML =
        I.checkc +
        "<span>" +
        esc(msg) +
        '</span><button type="button" data-toast-close aria-label="إغلاق">' +
        I.close +
        "</button>";
      toastEl.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        toastEl.classList.remove("show");
      }, 3000);
    }

    function open() {
      drawer.classList.add("open");
      overlay.classList.add("open");
      document.body.classList.add("zc-lock");
    }
    function close() {
      drawer.classList.remove("open");
      overlay.classList.remove("open");
      document.body.classList.remove("zc-lock");
    }

    window.ZCart = { add: add, open: open, close: close, toast: toast };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", build);
    else build();
  })();
} catch (err) {
  console.error("[main.js] خطأ في السلة:", err);
}

/* ---------- 3) صفحة المنتج (بتشتغل بس في product.html) ---------- */
try {
  /* صفحة المنتج: product.html?id=pizza-1 */
  (function () {
    "use strict";
    var root = document.getElementById("product-root");
    if (!root) return; // مش في صفحة المنتج
    var id = new URLSearchParams(location.search).get("id");
    var prod = null;
    Object.keys(window.ZMENU || {}).forEach(function (c) {
      window.ZMENU[c].forEach(function (p) {
        if (p.id === id) prod = p;
      });
    });

    if (!prod) {
      root.innerHTML =
        '<div class="zc-empty"><h3>لم نجد هذا المنتج</h3><p>الرابط غير صحيح أو المنتج لم يعد متاحاً.</p><a class="btn-yellow" href="index.html">العودة للمنيو</a></div>';
      return;
    }

    document.title = prod.name + " | مطعم لاتينو ماكس";
    var share = document.getElementById("share-btn");
    if (share)
      share.href =
        "https://wa.me/?text=" +
        encodeURIComponent(prod.name + " " + location.href);

    var si = 0,
      qty = 1,
      added = false,
      timer = null;

    function render() {
      var size = prod.sizes[si];
      var opts = prod.sizes
        .map(function (s, i) {
          return (
            '<button type="button" class="size-opt' +
            (i === si ? " active" : "") +
            '" data-act="size" data-i="' +
            i +
            '"><span>' +
            s.label +
            "</span><b>" +
            s.price +
            " ج.م</b></button>"
          );
        })
        .join("");
      root.innerHTML =
        '<div class="product-hero"><img src="' +
        prod.img +
        '" alt="' +
        prod.name +
        '" /></div>' +
        '<section class="p-card"><div class="p-title"><h1>' +
        prod.name +
        '</h1><span class="p-price"><b>' +
        size.price +
        "</b> جنيه مصري</span></div><p>" +
        prod.desc +
        "</p></section>" +
        '<section class="p-card"><div class="p-row"><h2>اختر الحجم</h2><span class="p-req">مطلوب</span></div><div class="size-grid">' +
        opts +
        "</div></section>" +
        '<section class="p-card p-qty"><span>الكمية المطلوبة</span><div class="zc-qty"><button type="button" data-act="inc" aria-label="زيادة">+</button><span>' +
        qty +
        '</span><button type="button" data-act="dec" aria-label="نقص">−</button></div></section>' +
        '<button type="button" class="p-add' +
        (added ? " done" : "") +
        '" data-act="add">' +
        (added
          ? "تمت الإضافة للسلة! ✓"
          : "أضف إلى السلة — " + size.price * qty + " ج.م") +
        "</button>";
    }

    root.addEventListener("click", function (e) {
      var b = e.target.closest("[data-act]");
      if (!b) return;
      var act = b.getAttribute("data-act");
      if (act === "size") si = +b.getAttribute("data-i");
      if (act === "inc") qty = Math.min(qty + 1, 50);
      if (act === "dec") qty = Math.max(qty - 1, 1);
      if (act === "add") {
        var size = prod.sizes[si];
        ZCart.add(
          {
            id: prod.id,
            name: prod.name,
            size: size.label,
            price: size.price,
            img: prod.img,
          },
          qty,
        );
        added = true;
        clearTimeout(timer);
        timer = setTimeout(function () {
          added = false;
          render();
        }, 2200);
      }
      if (act !== "add") added = false;
      render();
    });

    render();
  })();
} catch (err) {
  console.error("[main.js] خطأ في صفحة المنتج:", err);
}
