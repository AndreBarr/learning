// Bookmark Class
class BookMark {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}

// UI Class: Handle UI Tasks
class UI {
  static displayBookmarks() {
    const bookmarks = Store.getBookmarks();

    const html = bookmarks
      .map(
        (bookmark) =>
          `<div class="card card-body mb-4">
            <div id="bookmark-name"><h4>${bookmark.name}</h4></div>
            <a href="${bookmark.url}">Visit</a>
            <button class="btn btn-danger" id="delete">Delete</button>
         </div>`
      )
      .join("");

    document.querySelector("#bookmarks").innerHTML = html;
  }

  static deleteBookmark(bookmark) {
    bookmark.parentElement.remove();
  }

  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".form-control");
    const form = document.querySelector("#bookmark-form");
    container.insertBefore(div, form);

    setTimeout(() => div.remove(), 3000);
  }

  static clearFields() {
    const siteName = (document.querySelector("#site-name").value = "");
    const siteUrl = (document.querySelector("#site-url").value = "");
  }
}

// Store Class: Handles Storage
class Store {
  static getBookmarks() {
    let bookmarks;

    if (localStorage.getItem("bookmarks")) {
      bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    } else {
      bookmarks = [];
    }

    return bookmarks;
  }

  static addBookmark(bookmark) {
    const bookMarks = Store.getBookmarks();
    let exists = false;

    const matches = bookMarks.filter((bookMark) => {
      const regex = new RegExp(`${bookmark.name}`, "gi");
      return bookMark.name.match(regex);
    });

    if (matches.length > 0) {
      UI.showAlert("Bookmark names must be unique", "danger");
    } else {
      bookMarks.push(bookmark);
    }

    localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
  }

  static removeBookmark(bookmark) {
    const bookMarks = Store.getBookmarks();

    bookMarks.forEach((bookMark, index) => {
      if (bookMark.name === bookmark) {
        bookMarks.splice(index, 1);
      }
    });

    localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
  }
}

document.addEventListener("DOMContentLoaded", UI.displayBookmarks);

document.querySelector("#bookmark-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const siteName = document.querySelector("#site-name").value;
  const siteUrl = document.querySelector("#site-url").value;

  if (siteName && siteUrl) {
    let bookmark;
    try {
      bookmark = new BookMark(siteName, new URL(siteUrl).href);
      Store.addBookmark(bookmark);
      UI.displayBookmarks();
    } catch {
      UI.showAlert("Please use a valid url", "danger");
    }
  } else {
    UI.showAlert("Please fill in both fields", "danger");
  }

  UI.clearFields();
});

document.querySelector("#bookmarks").addEventListener("click", (e) => {
  if (e.target.id === "delete") {
    UI.deleteBookmark(e.target);
    Store.removeBookmark(
      e.target.parentElement.querySelector("#bookmark-name").textContent
    );
    UI.showAlert("Bookmark removed!", "success");
  }
});
