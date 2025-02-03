package createpdf.createService;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;

@Service
public class PdfService {
	
	public byte[] getPdf(@RequestBody String nome,@RequestBody String fone,@RequestBody String descricao) throws IOException{
		
		String jasperFile = "D:/Leitura_Jasper/Pdf.jasper";
		
		Map<String, Object> parametros = new HashMap<>();
		parametros.put("nome", nome);
		parametros.put("fone", fone);
		parametros.put("complemento", descricao);
		
		byte[] content = {};
		try {
			
			JasperPrint fillReport = JasperFillManager.fillReport(jasperFile, parametros, new JREmptyDataSource());
			
//			String output = "D:/Leitura_Jasper/teste.pdf";
			
			content = JasperExportManager.exportReportToPdf(fillReport);
			 System.out.println("deu certooooooooooo");
			
		} catch (Exception e){
			e.printStackTrace();
		}
		
		return content;
	}
	
	
}
