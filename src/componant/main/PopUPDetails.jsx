import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

export default function PopUPDetails({ img, title, description, onClose }) {
  useEffect(() => {
    Swal.fire({
      imageUrl: img,
      imageHeight: 200,
      imageAlt: title,
      title: title,
      text: description || "No description available",
      confirmButtonText: "Close",
      customClass: {
        popup: 'my-swal-popup',
      }
    }).then(() => {
      onClose(); // يقفل البوب أب لما المستخدم يضغط على زر إغلاق
    });
  }, []);

  return null; // مفيش حاجة تظهر في الـ DOM
}
