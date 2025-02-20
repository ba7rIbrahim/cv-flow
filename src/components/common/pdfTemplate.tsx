import { formSchema } from "@/schema/formValidationSchema";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Image,
} from "@react-pdf/renderer";
import { JSX } from "react";
import { z } from "zod";

const getStyles = (color: string = "#000") =>
  StyleSheet.create({
    page: {
      padding: 30,
      fontFamily: "Helvetica-Bold",
    },
    header: {
      marginBottom: 0,
      paddingBottom: 15,
      alignItems: "center",
    },
    headerContent: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "center",
      marginBottom: 15,
    },
    photoContainer: {
      marginRight: 20,
      width: 80,
      height: 80,
      borderRadius: 40,
      overflow: "hidden",
      marginBottom: 5,
      alignItems: "center",
    },
    textContainer: {
      alignItems: "center",
      gap: 4,
    },
    name: {
      fontSize: 28,
      fontWeight: "extrabold",
      color: color,
      textAlign: "center",
      marginBottom: 0,
    },
    position: {
      fontSize: 18,
      color: "#4a5568",
      textAlign: "center",
      marginTop: 0,
    },
    contactRow: {
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 8,
    },
    badge: {
      backgroundColor: `${color}33`,
      paddingHorizontal: 8,
      paddingVertical: 3,
      borderRadius: 12,
      fontSize: 10,
      margin: 2,
    },
    sectionContainer: { marginVertical: 12 },
    sectionHeader: {
      backgroundColor: `${color}33`,
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderRadius: 3,
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 16,
      color: color,
      fontWeight: "bold",
    },
    companyDuration: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    company: { fontWeight: "semibold", fontSize: 13, color: "#2d3748" },
    duration: { fontSize: 11, color: "#718096" },
    description: {
      fontSize: 11,
      color: "#4a5568",
      marginTop: 6,
      lineHeight: 1.4,
    },
    twoColumn: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 20,
      minWidth: "220px",
    },
    column: { width: "48%", minWidth: "220px" },
    bulletList: { marginLeft: 10 },
    bulletItem: { fontSize: 11, color: "#4a5568", marginBottom: 4 },
  });

export const PDFTemplate = ({
  data,
}: {
  data: z.infer<typeof formSchema>;
}) => {
  const styles = getStyles(data.color);
  const accentColor = data.color || "#2b6cb0";

  const renderSection = (
    condition: boolean,
    title: string,
    content: JSX.Element
  ) => {
    return condition ? (
      <View style={styles.sectionContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>{title}</Text>
        </View>
        {content}
      </View>
    ) : null;
  };

  const formatDate = (date?: Date) =>
    date?.toLocaleDateString("en-US", { month: "short", year: "numeric" }) ||
    "Present";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            {data.personalImage && (
              <View style={styles.photoContainer}>
                <Image
                  src={data.personalImage}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            )}

            <View style={styles.textContainer}>
              <Text style={styles.name}>{data.name}</Text>
              {data.position && (
                <Text style={styles.position}>{data.position}</Text>
              )}
            </View>
          </View>

          <View style={styles.contactRow}>
            {data.email && <Text style={styles.badge}>{data.email}</Text>}
            {data.mobile && <Text style={styles.badge}>{data.mobile}</Text>}
            {(data.city || data.country) && (
              <Text style={styles.badge}>
                {[data.city, data.country].filter(Boolean).join(", ")}
              </Text>
            )}
            {data.linkedin && (
              <Link src={data.linkedin} style={styles.badge}>
                LinkedIn
              </Link>
            )}
            {data.github && (
              <Link src={data.github} style={styles.badge}>
                GitHub
              </Link>
            )}
          </View>
        </View>

        {/* Experience Section */}
        {renderSection(
          data.experiences.length > 0,
          "Experience",
          <View>
            {data.experiences.map((exp, idx) => (
              <View key={idx} style={{ marginBottom: 14 }}>
                <View style={styles.companyDuration}>
                  <Text style={styles.company}>
                    {exp.organization || "Company Name"}
                  </Text>
                  <Text style={styles.duration}>
                    {formatDate(exp.duration?.from)} -{" "}
                    {formatDate(exp.duration?.to)}
                  </Text>
                </View>
                {exp.role && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: accentColor,
                      marginBottom: 3,
                    }}
                  >
                    {exp.role}
                  </Text>
                )}
                {exp.description && (
                  <Text style={styles.description}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Projects Section */}
        {renderSection(
          data.projects.length > 0,
          "Projects",
          <View>
            {data.projects.map((proj, idx) => (
              <View key={idx} style={{ marginBottom: 14 }}>
                {proj.title && (
                  <Link
                    src={proj.link || "#"}
                    style={[styles.company, { color: accentColor }]}
                  >
                    {proj.title}
                  </Link>
                )}
                {proj.description && (
                  <Text style={styles.description}>{proj.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Education Section */}
        {renderSection(
          data.educations.length > 0,
          "Education",
          <View>
            {data.educations.map((edu, idx) => (
              <View key={idx} style={{ marginBottom: 14 }}>
                <View style={styles.companyDuration}>
                  <Text style={styles.company}>
                    {edu.college || "University Name"}
                  </Text>
                  <Text style={styles.duration}>
                    {edu.year?.from?.getFullYear() || "20XX"} -{" "}
                    {edu.year?.to?.getFullYear() || "Present"}
                  </Text>
                </View>
                {edu.qualification && (
                  <Text
                    style={{
                      fontSize: 12,
                      color: accentColor,
                      marginBottom: 3,
                    }}
                  >
                    {edu.qualification}
                  </Text>
                )}
                {edu.description && (
                  <Text style={styles.description}>{edu.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Skills & Languages */}
        <View style={styles.twoColumn}>
          {renderSection(
            (data.skills?.length || 0) > 0,
            "Skills",
            <View style={styles.column}>
              <View style={styles.bulletList}>
                {data.skills?.map((skill, idx) => (
                  <Text key={idx} style={styles.bulletItem}>
                    • {skill.value}
                  </Text>
                ))}
              </View>
            </View>
          )}

          {renderSection(
            (data.languages?.length || 0) > 0,
            "Languages",
            <View style={styles.column}>
              <View style={styles.bulletList}>
                {data.languages?.map((lang, idx) => (
                  <Text key={idx} style={styles.bulletItem}>
                    • {lang.value}
                  </Text>
                ))}
              </View>
            </View>
          )}
        </View>

        {/* Certificates & Achievements */}
        <View style={styles.twoColumn}>
          {renderSection(
            (data.certificates?.length || 0) > 0,
            "Certificates",
            <View style={styles.column}>
              <View style={styles.bulletList}>
                {data.certificates?.map((cert, idx) => (
                  <Text key={idx} style={styles.bulletItem}>
                    • {cert.value}
                  </Text>
                ))}
              </View>
            </View>
          )}

          {renderSection(
            (data.achievements?.length || 0) > 0,
            "Achievements",
            <View style={styles.column}>
              <View style={styles.bulletList}>
                {data.achievements?.map((ach, idx) => (
                  <Text key={idx} style={styles.bulletItem}>
                    • {ach.value}
                  </Text>
                ))}
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};
