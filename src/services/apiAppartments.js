export async function createAppartment(values) {
  const photos = values.photos.map((photo) => photo.originFileObj);

  const formData = new FormData();

  for (const prop in values) {
    if (values[prop] !== undefined) {
      if (prop !== "photos") formData.append(prop, values[prop]);
    }
  }

  for (let i = 0; i < photos.length; i++) {
    formData.append("photos", photos[i]);
  }

  const token = localStorage.getItem("token");
  const res = await fetch(
    "http://localhost:5000/admin/add-object-with-photos",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
}

export async function fetchAppartments(filters) {
  const res = await fetch("http://localhost:5000/api/objects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(filters),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function fetchAptFullInfo(id) {
  const res = await fetch(`http://localhost:5000/api/objects/${id}`);
  const data = res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}

export async function fetchFavorites(bookmarks) {
  const res = await fetch("http://localhost:5000/api/objects/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ object_ids: bookmarks }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.massage);
  }
  return data;
}

export async function changeStatus(id) {
  const token = localStorage.getItem("token");
  const res = await fetch(`http://localhost:5000/admin/change-status/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
}
