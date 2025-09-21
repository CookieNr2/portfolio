import './InfoItem.scss';

interface InfoItemProps {
  icon: string;
  text: string;
}

function InfoItem({ icon, text }: InfoItemProps) {
  return (
    <div className="info-item">
      <span className="info-icon">{icon}</span>
      <span className="info-text">{text}</span>
    </div>
  );
}

export default InfoItem;
