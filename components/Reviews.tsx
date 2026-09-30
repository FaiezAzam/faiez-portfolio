import Image from "next/image";

export default function Reviews() {
  return (
    <div className="reviews-section" id="reviews">
  <h2>{"Client Reviews"}</h2>
  <div className="reviews-grid">
    <div className="review-card">
      <Image src="/images/upwork-client-review-1.png" alt="Upwork Client Review 1" width={676} height={341} sizes="(max-width: 600px) 100vw, 500px" />
      <div className="review-footer"><span className="upwork-badge">{"Upwork"}</span>{" Verified 5-star review"}</div>
    </div>
    <div className="review-card">
      <Image src="/images/upwork-client-review-2.png" alt="Upwork Client Review 2" width={664} height={366} sizes="(max-width: 600px) 100vw, 500px" />
      <div className="review-footer"><span className="upwork-badge">{"Upwork"}</span>{" Verified 5-star review"}</div>
    </div>
  </div>
</div>
  );
}
