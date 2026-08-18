"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@puzzlepuzzle/ui";

type Member = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

export default function TeamPage() {
  const router = useRouter();
  const [members, setMembers] = useState<Member[]>([
    { id: 1, name: "", phone: "", email: "" }
  ]);

  const addMember = () => {
    if (members.length >= 6) return; // 최대 6명 제한 예시
    setMembers([...members, { id: Date.now(), name: "", phone: "", email: "" }]);
  };

  const removeMember = (id: number) => {
    if (members.length <= 1) return;
    setMembers(members.filter(m => m.id !== id));
  };

  const updateMember = (id: number, field: keyof Member, value: string) => {
    setMembers(members.map(m => m.id === id ? { ...m, [field]: value } : m));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 데이터 저장 로직 구현
    router.push("/ready");
  };

  const isFormValid = members.every(m => m.name.trim() !== "" && m.phone.trim() !== "");

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flex: 1,
      padding: "var(--spacing-4) 0"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "var(--spacing-6)" }}>참여자 정보 입력</h1>
      
      <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "800px" }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-6)",
          marginBottom: "var(--spacing-8)",
          maxHeight: "50vh",
          overflowY: "auto",
          paddingRight: "var(--spacing-2)"
        }}>
          {members.map((member, index) => (
            <div key={member.id} style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--spacing-4)",
              position: "relative"
            }}>
              <h3 style={{ margin: "0 0 var(--spacing-4) 0", fontSize: "1.25rem" }}>참여자 {index + 1}</h3>
              
              {members.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeMember(member.id)}
                  style={{
                    position: "absolute",
                    top: "var(--spacing-4)",
                    right: "var(--spacing-4)",
                    background: "none",
                    border: "none",
                    color: "var(--color-primary)",
                    cursor: "pointer",
                    fontSize: "1rem"
                  }}
                >
                  삭제
                </button>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--spacing-4)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-2)" }}>
                  <label htmlFor={`name-${member.id}`}>이름 *</label>
                  <input
                    id={`name-${member.id}`}
                    type="text"
                    required
                    value={member.name}
                    onChange={(e) => updateMember(member.id, "name", e.target.value)}
                    style={{
                      padding: "var(--spacing-3)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--color-border)",
                      fontSize: "1.2rem"
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-2)" }}>
                  <label htmlFor={`phone-${member.id}`}>연락처 *</label>
                  <input
                    id={`phone-${member.id}`}
                    type="tel"
                    required
                    value={member.phone}
                    onChange={(e) => updateMember(member.id, "phone", e.target.value)}
                    style={{
                      padding: "var(--spacing-3)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--color-border)",
                      fontSize: "1.2rem"
                    }}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-2)", gridColumn: "1 / -1" }}>
                  <label htmlFor={`email-${member.id}`}>이메일 (선택)</label>
                  <input
                    id={`email-${member.id}`}
                    type="email"
                    value={member.email}
                    onChange={(e) => updateMember(member.id, "email", e.target.value)}
                    style={{
                      padding: "var(--spacing-3)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--color-border)",
                      fontSize: "1.2rem"
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Button 
            type="button" 
            variant="outline"
            onClick={addMember}
            disabled={members.length >= 6}
            style={{ fontSize: "1.25rem", padding: "var(--spacing-3) var(--spacing-6)" }}
          >
            + 인원 추가
          </Button>

          <Button 
            type="submit" 
            size="lg"
            disabled={!isFormValid}
            style={{ 
              fontSize: "1.5rem", 
              padding: "var(--spacing-4) var(--spacing-8)",
              opacity: isFormValid ? 1 : 0.5
            }}
          >
            제출하기
          </Button>
        </div>
      </form>
    </div>
  );
}
