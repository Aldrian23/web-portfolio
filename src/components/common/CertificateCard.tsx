import { FC } from 'react';

interface CertificateCardProps {
    id: string;
    title: string;
    issuedBy: string;
    dateCertified: string;
    imageUrl: string;
}

const CertificateCard: FC<CertificateCardProps> = ({
    title,
    issuedBy,
    dateCertified,
    imageUrl
}) => {
    return (
        <div className="p-3 rounded-lg transition-colors duration-300 bg-neutral-800/50 hover:bg-neutral-800 md:p-4">
            <div className="flex flex-col">
                <div className="flex flex-wrap gap-2 justify-between items-start mb-3">
                    <h1 className="text-lg font-semibold tracking-wide md:text-2xl font-title">{title}</h1>
                </div>

                {/* Certificate Image */}
                <div className="mb-3 w-full">
                    <img
                        src={imageUrl}
                        alt={`${title} certificate`}
                        className="object-contain w-full rounded-md"
                    />
                </div>

                {/* Certificate Details */}
                <div className="space-y-2">
                    <div className="flex items-center">
                        <span className="mr-2 text-sm font-medium text-neutral-400 font-body">Certified By:</span>
                        <span className="text-sm font-body">{issuedBy}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2 text-sm font-medium text-neutral-400 font-body">Date Certified:</span>
                        <span className="text-sm font-body">{dateCertified}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateCard; 