"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Phone, Mail, Download } from "lucide-react";
import type { TeamMember } from "@/lib/team-data";

export default function TeamMemberModal({
  member,
}: {
  member: TeamMember;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="text-center">
        <div
          className="cursor-pointer group"
          onClick={() => setOpen(true)}
        >
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4">
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <h3 className="text-base font-bold text-white">{member.name}</h3>
          <p className="text-sm text-white/70 mb-1">{member.role}</p>
          <p className="text-xs text-white/60 mb-3">{member.email}</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <a
            href={`tel:${member.phone.replace(/\s/g, "")}`}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            title="Ring"
            aria-label="Ring"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            title="E-post"
            aria-label="Send e-post"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`/kontakt/${member.slug}.vcf`}
            download
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
            title="Last ned visittkort"
            aria-label="Last ned vCard"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            onClick={() => setOpen(true)}
            className="ml-1 text-xs text-teal-accent font-semibold hover:underline"
          >
            Les mer
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            <div className="p-8">
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="absolute inset-0 w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-navy-dark">
                    {member.name}
                  </h2>
                  <p className="text-sm text-navy-dark/70 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-[15px] text-navy-dark/70 leading-relaxed mb-6">
                {member.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-navy-dark/70 hover:text-navy-dark transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-sm text-navy-dark/70 hover:text-navy-dark transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {member.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
